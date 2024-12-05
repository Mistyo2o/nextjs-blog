import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import SiteConfig from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "关于我",
    description: "Information about me"
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
                拥有超过8年的软件开发经验，张伟是一位在多个技术领域都展现出卓越能力的资深工程师。他擅长于全栈开发，包括前端JavaScript框架（如React和Vue.js），后端服务的构建（使用Node.js和Python），以及数据库设计和管理（如MySQL和MongoDB）。张伟在敏捷开发和持续集成/持续部署（CI/CD）流程中具有丰富的实践经验，并且对于微服务架构和容器化技术（如Docker和Kubernetes）有着深入的理解。

在职业生涯中，张伟成功领导并参与了多个大型项目，包括电商平台、移动应用和企业级软件解决方案的开发。他以其出色的问题解决能力、团队合作精神和对技术创新的执着追求而受到同事和客户的广泛赞誉。
            </p>
        </div>
    </div>
  )
}

export default AnoutPage
