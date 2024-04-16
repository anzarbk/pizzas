'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import UserTabs from '../components/layout/UserTabs'

const page = () => {
    const {data:session, status} =  useSession();
    const email = session?.user?.email
    const username = session?.user?.name

    const [admin, setAdmin] = useState(false)

    const fetchData = async () => {
        try {
          const Response = await axios.post('/api/profile/',{email});
          // Update state based on the response
          console.log(Response.data.data);
          if (Response.status == 200) {
            setAdmin(Response.data.data.isAdmin)
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
          // Handle errors
        }
      };
    
      fetchData();

      const handleSubmit = ()=>{

      }
      
  return (
    <section className='mt-8'>
   
     {admin ? <UserTabs/>:''}

    <h1 className='text-center text-primary py-4 mt-4 text-4xl'>Categories</h1>

    <table class="w-full  mt-4 text-center ">
    <thead>
      <tr class="">
        <th class="border border-gray-300 px-4 py-2 ">Name</th>
        <th class="border border-gray-300 px-4 py-2 ">Image</th>
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <td class="border border-gray-300 px-4 py-2 ">cat name</td>
        <td class="border border-gray-300 px-4 py-2 ">img</td>
      </tr>
    </tbody>
  </table>


     <form onSubmit={handleSubmit}>

        <div className="flex items-center justify-center gap-4 mt-6 border  ">
          <label htmlFor="categoryName" className="block text-gray-700 font-semibold mb-2 p-4 ">Category Name :</label>
          <input type="text" id="categoryName"  className="border border-gray-300 px-3 py-2 rounded-full w-auto focus:outline-none focus:border-primary" />
        <input type='file' className='hidden' ></input>
        <span className='border bg-primary text-white font-semibold rounded-full px-6 py-2 cursor-pointer p-4 ' >image upload</span>
        <button type="submit" className="bg-primary text-white px-4 py-2  rounded-full w-auto hover:bg-primary-dark">submit</button>
        </div>
       
        
      </form>
     </section>
  )
}

export default page