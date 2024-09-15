import { JSONFilePreset } from "lowdb/node"

export async function GET(){
    const db = await JSONFilePreset('db.json', { registrants: [] })
   
    return new Response(JSON.stringify(db.data))
}
