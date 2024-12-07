import React from 'react'
import { posts } from "#site/content";
import PostItem from '@/components/post-item';
import { sortPosts } from '@/lib/utils';
import QueryPagination from '@/components/query-pagination';
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "我的博客",
  description: "My ramblings on all things whe dev..."
}

const POSTS_PER_PAGE = 5;



export default async function BlogPage(searchParams: {searchParams:Promise<{page?: string}>}){
  const currentPage =Number((await searchParams.searchParams).page) || 1;
  const sorttedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sorttedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sorttedPosts.slice(
    POSTS_PER_PAGE * (currentPage -1),
    POSTS_PER_PAGE * currentPage
);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
            <h1 className='inline-block font-black text-4xl lg:text-5xl'>我对所有事情的漫谈...</h1>
            {/* <p className="text-xl text-muted-foreground">
                我对所有事情的漫谈……
            </p> */}
        </div>
      </div>
      <hr className='mt-8'/>
        {displayPosts?.length > 0 ? 
        (<ul className='flex flex-col'>
          {displayPosts.map(post => {
            const {slug, date, description, title} = post
            return <li key={slug}>
              <PostItem slug={slug} date={date} title={title} description={description}/>
            </li>
          })}
        </ul>) : 
        (<p>Nothing to see here yet</p>)}
        <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
    </div>
  )
}