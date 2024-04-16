import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
  return (
    
        <div className='bg-gray-300 p-4 rounded-lg text-center flex flex-col items-center hover:bg-white'>
            <Image src='/pizza.png' alt='pizza' width={200} height={200}/>
            <h4 className='font-semibold my-3 text-xl'>Pepporoni pizza</h4>
            <p className='text-grey-500 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet tincidunt ligula, in sollicitudin arcu </p>
            <button className='bg-primary text-white px-6 py-2 rounded-full my-3'>Add to cart $12</button>
        </div>
  )
}

export default MenuItem