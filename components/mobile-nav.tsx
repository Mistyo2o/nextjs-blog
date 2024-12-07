"use client"

import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Icons } from './icons'
import SiteConfig from '@/config/site'


const MobileNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle></SheetTitle>
            <SheetTrigger asChild>
                <Button variant="outline" className='w-10 px-0 sm:hidden'>
                    <Menu className='h-5 w-5'></Menu>
                    <span className='sr-only'>Toggle Theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileLink href="/" className='flex item-center'>
                    <Icons.logo className='mr-2 h-6 w-4'/>
                    <span className='font-bold'>{SiteConfig.title}</span>
                </MobileLink>
                <div className='flex flex-col gap-3 mt-3'>
                    <MobileLink onOpenChange={setOpen} href="/blog">Blog</MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/about">About</MobileLink>
                    <Link target="_blank" rel="noreferrer" href={SiteConfig.links.github}>GitHub</Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?:string
}

function MobileLink({
    href,
    onOpenChange,
    children,
    className,
    ...props
}: MobileLinkProps){
    const router = useRouter()
    return <Link href={href} onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
    }}
    className={className}
    {...props}
    >
        {children}
    </Link>
}


export default MobileNav
