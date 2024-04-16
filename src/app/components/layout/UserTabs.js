import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const UserTabs = () => {
    const path = usePathname()
  return (
   
         <div className='flex gap-2 justify-center'>
          <Link href='/profile' className={path === '/profile' ? 'bg-primary text-white px-6 rounded-full py-2' : "bg-slate-600 text-white px-6 rounded-full py-2 "}  >Profile</Link>
          <Link href='/categories' className={path === '/categories' ? 'bg-primary text-white px-6 rounded-full py-2' : "bg-slate-600 text-white px-6 rounded-full py-2 "}  >Categories</Link>
          <Link href='/menu-items' className={path === '/menu-items' ? 'bg-primary text-white px-6 rounded-full py-2' : "bg-slate-600 text-white px-6 rounded-full py-2 "} >Menu items</Link>
          <Link href='/users' className={path === '/users' ? 'bg-primary text-white px-6 rounded-full py-2' : "bg-slate-600 text-white px-6 rounded-full py-2 "} >Users</Link>
          </div>
   
   
  )
}

export default UserTabs