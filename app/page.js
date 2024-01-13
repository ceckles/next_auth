import { redirect } from "next/navigation";
import {auth} from "./auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if(!session){
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div>
      <h1 className="p-5">Protected Page</h1>
      {
        session ?
        <Link href="/api/auth/signout" className='px-5 py-1 border border-green-400'>Logout</Link>
        : redirect("api/auth/signin")
      }
      </div>
    </>
  );
}
