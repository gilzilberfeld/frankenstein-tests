"use client";
import { useSearchParams } from "next/navigation";

export const THANK_YOU_ERROR_TEXT = "Who Are You?";
export default function ThankYou() {
  let message = THANK_YOU_ERROR_TEXT
  const searchParams = useSearchParams();
  const search = searchParams.get("name");
  if (search!=null){
    message = "Thank you, " + search + "!"
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>{message}</div>
    </main>
  );
}
