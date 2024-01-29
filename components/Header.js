import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
    const headerMenu=[
        {
            id:1,
            name: 'RideConnect',
            icon : '/header.png'
        },
        {
            id:2,
            name: 'RideConnect',
            icon: '/header.png'
        }
    ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-50 flex items-center justify-between'>
        <div className=' flex gap-24 items-center'>
            <Image src='/logo.png'
            width={70} height={70}
            alt='logo'/>
            <div className='flex gap-6 items-center'>
                {headerMenu.map((item)=>(
                    <div className='flex gap-2 items-center'>
                       <Image src={item.icon}
                       width={17} height={17}/>
                       <h2 className='text-[14px] font-medium'>{item.name}</h2> 
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header