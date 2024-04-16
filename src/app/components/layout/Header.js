'use client'
import React from 'react'
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react'


 const  Header = () => {
  

   const session =  useSession();
  console.log("session is :",session)
  const status = session.status 
  const userName = session?.data?.user?.name
  
  if (status === 'authenticated') {
    return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
      <Link className="text-primary font-semibold text-2xl" href="/">PIZZA'S</Link>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>

      <nav className='flex items-center gap-4 text-gray-500'>

   
      <Link href='/profile' className="">Hello {userName}</Link>
      <button onClick={()=>{signOut()}} href='/register' className="bg-primary text-white px-6 rounded-full py-2" >Logout</button>
    
      </nav>
    </header>)
  }else{
    return (
      <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
      <Link className="text-primary font-semibold text-2xl" href="/">PIZZA'S</Link>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
  
      <nav className='flex items-center gap-4 text-gray-500'>
  
        <Link href='/login' className="">Login</Link>
        <Link href='/register' className="bg-primary text-white px-6 rounded-full py-2" >Register</Link>
   

      </nav>
    </header>)}

}

export default Header