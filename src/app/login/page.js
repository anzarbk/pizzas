'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import google from '../../../public/google.png'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { signIn } from 'next-auth/react'


const Login = () => {
 

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [commonError, setCommonError] = useState('');
    const router = useRouter()

    const handleEmailChange = (e) => {
        setEmailError('')
        setCommonError('')
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPasswordError('')
        setCommonError('')
        setPassword(e.target.value);
      };
      const  handleFormSubmit = async (e) => {
        e.preventDefault()
       try{
   

         if (!email) {
           setEmailError("required !")
           return;
          }
          if (!password || password.length < 5) {
            setPasswordError("password must be at least 5 characters !")
            return
          }
          if (!password || !email) {
            setCommonError("please fill the fields !")
            return
          }
          const user = await signIn('credentials', {email,password,callbackUrl: '/'})
          console.log("returned user is :",user);
          // if(status === 'authenticated'){
          //   router.push('/');
          // }


    } catch (error) {
      setCommonError(error?.response?.data?.message);
      console.error('Error registering user:', error);
    }
        }
  return (
    <section className='py-6'>
        <h1 className='text-center text-primary py-4 text-4xl'>Login</h1>
        <div className='grid gap-2 max-w-xs mx-auto'>
            <input className='border p-2 border-gray-300 bg-gray-200 rounded-xl' type='email' placeholder='Email' value={email} onChange={handleEmailChange}></input>
            {emailError? <span className='text-red-600'>{emailError}</span>: ''}
            <input className='border p-2 border-gray-300 bg-gray-200 rounded-xl' type='Password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>        
            {passwordError? <span className='text-red-600'>{passwordError}</span>: ''}
            {commonError? <span className='text-red-600'>{commonError}</span>: ''}
            <button className='border bg-primary text-white font-semibold rounded-xl px-6 py-2' type='submit' onClick={handleFormSubmit}>Login</button>
            <div className=' text-center text-gray-500'>or login with provider</div>
            <button className='flex items-center gap-4 justify-center border border-gray-300 font-semibold rounded-xl px-6 py-2' type='submit'><Image src={google} width={25} height={25} alt='google'/> Login with google</button>
            <div className='font-thin text-sm text-center'><span>Create a new account ?</span><a className=' hover:text-blue-500 hover:underline' href='/register'>Register</a></div>
        </div>
    </section>
  )
}

export default Login