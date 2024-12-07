import SiteConfig from '@/config/site'
import { Mail } from 'lucide-react'
import React from 'react'
import { Icons } from './icons'

const SiteFooter = () => {
  return (
    <footer>
        <div className='mb-6 mt-14 flex flex-col items-center'>
            <div className='mb-3 flex space-x-4'>
                 <a target="_blank" rel="noreferrer" href={SiteConfig.links.mail}>
                    <span className='sr-only'>Mail</span>
                    <Mail className='h-6 w-6'/>
                 </a>
                 <a target="_blank" rel="noreferrer" href={SiteConfig.links.github}>
                    <span className='sr-only'>GitHub</span>
                    <Icons.gitHub className='h-6 w-6'/>
                 </a>
            </div>
            <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
                <a href={SiteConfig.links.personalSite} target="_blank">
                    {SiteConfig.author}
                </a>
            </div>
        </div>
    </footer>
  )
}

export default SiteFooter
