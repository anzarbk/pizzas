import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section>
        <div className='absolute  left-0 right-0 w-full justify-start'>
        <div className='absolute left-0 -top-[70px] text-left -z-10'>
            <Image src='/sallad1.png' alt='sallad1' width={109} height={189}/>
        </div>
        <div className='absolute -top-[100px] right-0 -z-10'>
            <Image src='/sallad2.png' alt='sallad1' width={107} height={195}/>
        </div>
        </div>
    <SectionHeaders subHeader={'Checkout'} mainHeader={'Menu'}/>
    <div className='grid grid-cols-3 gap-4 mt-12'>
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    </div>
    </section>
  )
}

export default HomeMenu