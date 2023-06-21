import React from 'react'
import Image from 'next/image'
import apple from '../app/apple-splash.png'
import Action from './Action'
import Navbar from './Navbar'

import '@/app/App.css'

export default function Main() {

  return (
    <main className='w-screen h-screen bg-gray-900'>
        <Image src={apple} alt='apple' fill={true} quality={100}/>
      <Navbar />

      

    </main>
  )
}
