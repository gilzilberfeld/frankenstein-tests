import { JSONFilePreset } from "lowdb/node";

export async function POST(request: Request) {
    const details = await request.json();
    await storeData(details);
    return new Response('Success!', {
        status: 200,
      })
}


async function storeData(details: any) {
    const db = await JSONFilePreset('db.json', { registrants: [] })
    await db.update(({ registrants: posts }) => posts.push(details))
}

