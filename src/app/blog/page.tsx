import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import PostList from "../components/PostList";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Blog | Tyler Arista",
  description:
    "Writing by Tyler Arista on software and applications engineering, sports data & analytics, and AI.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16">
        <p className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-muted uppercase">
          <span aria-hidden="true" className="h-2 w-2 rounded-[2px] bg-accent" />
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Writing
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          Notes on software &amp; applications engineering, sports data &amp;
          analytics, and AI.
        </p>
        <div className="mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <PostList posts={posts} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
