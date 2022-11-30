import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function login() {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
    <div>
        <p>Welcome, {session.user.name}</p>
        <Image src={session.user.image} width='100' height='25' className="rounded-2xl p-2" />

        <button onClick={()=> signOut()}>Sign Out</button>
    </div>
    )
  }else {
    return (
        <div>
            <p>You are not signed in</p>
            <button onClick={()=> signIn()}>Sign In</button>
        </div>
    )
  }
}

export default login;
