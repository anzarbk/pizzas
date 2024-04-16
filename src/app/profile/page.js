'use client'
import {React,useEffect,useState} from 'react'
import Image from 'next/image'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import profileImage from '../../../public/profile-icon.png'
import UserTabs from '../components/layout/UserTabs'


const Profile = () => {

  //###################################################           USER SESSION

  const {data:session, status} =  useSession();
  const email = session?.user?.email
  const username = session?.user?.name

  //###################################################           USER STATE MANAGEMENT

  const [name, setName] = useState(username)
  const [nameError, setNameError] = useState('')

  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')

  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState('')

  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState('')

  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState('')

  const [commonError, setCommonError] = useState('')

  // const [image, setImage] = useState('')
  const [admin, setAdmin] = useState(false)

  const fetchData = async () => {
    try {
      const Response = await axios.post('/api/profile/',{email});
      // Update state based on the response
      console.log(Response.data.data);
      if (Response.status == 200) {
        setName(Response.data.data.name)
        setAddress(Response.data.data.address)
        setCity(Response.data.data.city)
        setPin(Response.data.data.pin)
        setMobile(Response.data.data.mobile)
        setAdmin(Response.data.data.isAdmin)
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      // Handle errors
    }
  };

  fetchData();

  const addressData = {name,email,address,city,pin,mobile,admin}
  console.log(addressData);

  const changename = (e)=> {
    setNameError('')
    const fullName = e.target.value
    if ( fullName.length < 50) {
      setPin(fullName)
    } else {
      setNameError('maximum 50 characters')
    }
    setName(e.target.value)
  }

  const changeAddress = (e)=> {
    setAddress(e.target.value)
  }

  const changeCity = (e)=> {
    setCity(e.target.value)
  }

  const changePin = (e)=> {
    setPinError('')
    const pinNumber = e.target.value
    if ( pinNumber.length === 6) {
      setPin( pinNumber)
    } else {
      setPinError('invalid pin code')
    }
  }

  const changeMobile = (e)=> {
    setMobileError('')
    const mobileNumber = e.target.value
    if (mobileNumber.length === 10) {
      setMobile(mobileNumber)
    } else {
      setMobileError('invalid mobile number')
    }
  }


//###################################################          UPDATE USER PROFILE



  const updateUserInfo = async (e) => {
    console.log("hi");
    e.preventDefault();
    try{
      
      const addressData = {name,email,address,city,pin,mobile}
      console.log("hi231");
    console.log(addressData);
    const Response = await axios.put('/api/profile', addressData)
    // const admin = Response?.data?.data?.isAdmin
    // setAdmin(admin)
    if (Response.status == 200) {
      Swal.fire({
        title: "Profile updated successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
    }else{
      Swal.fire({
        title: "Something went wrong",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
    }

  } catch (error) {
    setCommonError(error?.response?.data?.message);
   
  }
}

//###################################################          UPDATE USER IMAGE

const changeImage = async (e) => {
  const files = e.target.files;
  if(files.length === 1){
    const data = new FormData();
    data.set('file',files[0])
    await axios.post('/api/upload', data)
  }
}



  return (
    <section className='mt-8'>
     
       {admin ? <UserTabs/>:''}
      <h1 className='text-center text-primary py-4 text-4xl'>Profile</h1>
      
      <div className='max-w-md mx-auto'>
        <div className='flex gap-6 items-center'>
        <div>
          <div className='bg-gray-300 p-4 gap-4 items-center rounded-lg flex flex-col justify-start'>
        <Image alt='hero' src={profileImage} width={100}  height={100} />
        <label>
        <input type='file' className='hidden' onChange={changeImage}></input>
        <span className='border bg-primary text-white font-semibold rounded-xl px-6 py-2 cursor-pointer' >Edit</span>
        </label>
          </div>
        </div>
        <form className='  flex flex-col ' onSubmit={updateUserInfo}>
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='text' placeholder='full name' defaultValue={username} onChange={changename} ></input>
        {nameError ? <span className='text-sm text-primary mt-2'>{nameError}</span>:''}
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='text' placeholder='email' disabled defaultValue={email}></input>
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='text' placeholder='street Address'  defaultValue={address} onChange={changeAddress} ></input>
        {addressError ? <span className='text-sm text-primary mt-2'>{addressError}</span>:''}
        <div className='flex gap-4'>
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='text' placeholder='City'   defaultValue={city} onChange={changeCity}></input>
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='number' placeholder='postal Code'   defaultValue={pin} onChange={changePin}></input>
        </div>
        {cityError ? <span className='text-sm text-primary mt-2'>{cityError}</span>:''}
        {pinError ? <span className='text-sm text-primary mt-2'>{pinError}</span>:''}
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='number' placeholder='mobile'  defaultValue={mobile} onChange={changeMobile} ></input>
        {mobileError? <span className='text-sm text-primary mt-2'>{mobileError}</span>:''}
        <input className='border p-2 mt-4 border-gray-300 bg-gray-200 rounded-xl' type='text' placeholder='Country'  defaultValue={'United arab emirates'} disabled></input>
        <span className='text-sm text-primary mt-2'>only deliver in United arab emirates !</span>
        <button className='border mt-4 bg-primary text-white font-semibold rounded-xl px-6 py-2' type='submit' >Save</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Profile