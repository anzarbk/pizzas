'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import UserTabs from '../components/layout/UserTabs'

const page = () => {
    const {data:session, status} =  useSession();
    const email = session?.user?.email

    
    const [admin, setAdmin] = useState(false)
    const [users, setUsers] = useState([])
    const [block, setBlock] = useState(false)


 const handleUser = async (id) => {
     const userId = {id}
     console.log(userId);
   const user = await axios.put('/api/users/',userId)
   if (user){
    console.log(user);
    setBlock(!block)
   }
 }
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('/api/profile/', { email });
            console.log(response.data.data);
            if (response.status === 200) {
              setAdmin(response.data.data.isAdmin);
            }
          } catch (error) {
            console.error('Error fetching profile data:', error);
          }
        };
    
        fetchData();
      }, [email]); // Fetch data only when email changes
    
      useEffect(() => {
        const fetchUserList = async () => {
          try {
            const response = await axios.get('/api/users/');
            console.log(response.data);
            if (response.status === 200) {
              setUsers(response.data);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserList();
      }, [block]);
    
      
  return (
      <section className='mt-8'>
        {admin ? <UserTabs/>:''}
    <h1 className='text-center text-primary py-4 mt-6 text-4xl'>Users</h1>
   

     <div className="overflow-x-auto">
      <table className="min-w-full divide-y border divide-gray-200">
        {/* <div className='flex flex-col items-center justify-center'> */}
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admin
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex flex-col items-center justify-center">
              Actions
            </th>
          </tr>
        </thead>

        {/* </div> */}
        {users &&
        users.map((user, index) => (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.city}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.isAdmin? 'Yes':'No'}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex flex-col items-center justify-center">
                {user.isBlock ? <button className="bg-green-500 text-white px-6 rounded-full py-2" onClick={()=>handleUser(user._id)} >un block </button>:<button className="bg-primary text-white px-6 rounded-full py-2" onClick={()=>handleUser(user._id)} > Block </button>}
              
              </td>
            </tr>
        </tbody>
        ))}
      </table>
    </div>
     </section>
  )

        }
export default page