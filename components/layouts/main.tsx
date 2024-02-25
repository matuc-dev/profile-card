import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import { SiGithub, SiGoogle, SiHearth, SiMoonrepo, SiVercel } from '@icons-pack/react-simple-icons'

export const Profile = () => {

  return (
    <div className='rounded-lg bg-zinc-950 border w-[400px] h-[450px] flex flex-col items-center text-center'>
      <img src="https://cdn.dribbble.com/users/220781/screenshots/2489920/media/2f2fcf72b8dd64c7286b299544b4a2d1.png" className="object-cover h-[150px] w-[399px] absolute" alt="" />
        <div className="">
          <Avatar className='size-24 border mt-[100px]'>
            <AvatarImage className='' src="https://i.pinimg.com/564x/22/81/4c/22814c1910340fba111a0ee1111f8468.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>
      <div className="flex flex-col gap-[-100px]">
        <h1 className='text-2xl font-semibold mb-[-5px] mt-1'>Matu</h1>
        <p className='text-zinc-400'>Fullstack Engineer</p>
        <p className='mt-1 text-sm'>I am Web Developer.I live in Tokyo.<br/>I love Node.js Typescript Next.js etc.<br/>I am primarily active in discord.</p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Link href={'https://github.com/matuc-dev'}><Button variant={'outline'} className='w-[300px] h-[40px]'>GitHub</Button></Link>
        <Link href={'https://mcmatu.vercel.app'} ><Button variant={'outline'} className='w-[300px] h-[40px]'>HomePage</Button></Link>
      </div>
    </div>
  )
}
