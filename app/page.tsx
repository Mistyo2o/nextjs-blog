import { buttonVariants } from "@/components/ui/button";
import SiteConfig from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content"
import Link from "next/link";
import PostItem from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <>
      <section className="space-y-6 pd-8 pt-6 md:pd-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Misty
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            这是我的博客模板 使用了tailwind, shadcn, velite and Nextjs 15
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>
              阅读我的博客
            </Link>
            <Link href={SiteConfig.links.github} target="_blnak" rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-fit")}>
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          最新发布的博客
        </h3>
        <ul className="flex flex-col">
          {latestPosts.map((psot) => (
            <li key={psot.slug} className="first:border-t first:border-border">
              <PostItem slug={psot.slug} title={psot.title} description={psot.description} date={psot.date}></PostItem>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
