import React from 'react'
import { posts } from '#site/content';
import MDXContent from '@/components/mdx-components';
import "@/styles/mdx.css"
import { Metadata } from 'next';
import SiteConfig from '@/config/site';
import NotFound from '@/app/not-found';

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: {params:Promise<{slug:string[]}>}) {
    const slug = (await params.params).slug.join("/")
    const psot = posts.find((psot) => psot.slugAsParams === slug)
    return psot;
}

export async function generateMetadata(params: {params:Promise<{slug:string[]}>}):Promise<Metadata> {
    const post = await getPostFromParams(params)
    if(!post){
        return {}
    }
    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title)
    return {
        title: post.title,
        description: post.description,
        authors: {name: SiteConfig.author},
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }                
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description:post.description,
            images:[`/api/og?${ogSearchParams.toString()}`]
        }
        
    }
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }))
}

export default async function PostPage(params:{params:Promise<{slug:string[]}>}) {
    const post = await getPostFromParams(params)
    if (!post || !post.published) {
        return (<NotFound/>)
    }
    return (
        <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
            <h1 className='mb-2'>{post.title}</h1>
            {post.description ? (<p className='text-xl mt-0 text-muted-foreground'>{post.description}</p>) : null}
            <hr className='my-4'/>
            <MDXContent code={post.body}/>
        </article>
    )
}

