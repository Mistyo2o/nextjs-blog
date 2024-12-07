import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import SiteConfig from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "关于我",
    description: "关于我的信息"
}

const AnoutPage = () => {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
            <div className='flex-1 space-x-4'>
                <h1 className='iniine-block font-black text-4xl lg:text-5xl'>
                    关于我
                </h1>
            </div>
        </div>
        <hr className='my-8'></hr>
        <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
            <div className='min-w-48 max-w-48 flex flex-col gap-2'>
                <Avatar className='h-48 w-48'>
                    <AvatarImage src='/avatar.png' alt={SiteConfig.author}></AvatarImage>
                    <AvatarFallback>Misty</AvatarFallback>
                </Avatar>
                <h2 className='text-2xl font-bold text-center break-words'>
                    {SiteConfig.author}
                </h2>
                <p className='text-muted-foreground text-center break-words'>
                    资深软件开发工程师
                </p>
            </div>
            <p className='text-muted-foreground text-lg py-4'>
               Todo...
            </p>
        </div>
    </div>
  )
}

export default AnoutPage
