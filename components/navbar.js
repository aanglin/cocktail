import { signOut } from "next-auth/react"



function cocktail({session}) {
 
  return (
    <nav className="fixed flex justify-between items-center w-full h-full px-2 2xl:px-16 pt-16 ">
        <h1 className="text-white font-bold text-2xl">Foodies Cocktails</h1>
        <p className="text-white font-bold text-xl ">{session.user.name}</p>
        
        <button onClick={() => signOut()} className='w-36 border bg-blue-400 rounded-2xl justify-center p-1 text-white'>Sign Out</button>
        
      
        </nav>
  )
}

export default cocktail