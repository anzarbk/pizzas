'use-client'
import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='grid grid-cols-2 mt-8'>
        <div className='py-12'>
        <h1 className='text-4xl font-semibold'>Everything<br/> is better with<br/> <span className='text-primary'>Pizza</span></h1>
        <p className='my-6 text-gray-500'> Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
        <div className='flex gap-4'>
            <button className='bg-primary flex items-center gap-2 text-white px-4 py-2 rounded-full'><span>Order now</span>
            </button>
            <button>Learn More </button>
        </div>
        </div>
        <div className=' relative'>
        <Image alt='hero' src='/pizza.png' layout={'fill'} objectFit={'contain'} />
        </div>
    </section>
  )
}

export default Hero