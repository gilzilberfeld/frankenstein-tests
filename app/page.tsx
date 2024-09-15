"use client"
import { Details } from "./components/details";
import Registration from "./components/registration";
import { useRouter } from "next/navigation";

export const WELCOME_TEXT = 'Register to the magnificent Newsletter!';
export default function RegistrationPage() {
  const router = useRouter()
  
  const submit = async(theBody : string) => {
    const response = await fetch('api/register', {
      method: 'POST',
      body: theBody,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data
  }

  function handleRegister(info: Details, promotions: boolean): void {
    submit(getBody(info, promotions))
    router.push('/thankyou?name=' + info.firstName)
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        <div>{WELCOME_TEXT}</div>
        <Registration onRegister={handleRegister}/>
    </main>
  );
}
function getBody(info: Details, promotions: boolean): string {
  return JSON.stringify({info, promotions})
}

