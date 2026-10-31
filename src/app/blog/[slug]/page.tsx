import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import Tag from "../../components/Tag";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tyler Arista`,
    description: post.summary,
  };
}

const backLink =
  "inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white";

export default async function BlogPost({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-2xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
        <Link href="/blog" className={backLink}>
          <FiArrowLeft aria-hidden="true" />
          All posts
        </Link>

        <article className="mt-8">
          <header className="border-b border-line pb-8">
            <p className="font-mono text-xs text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            {post.summary && (
              <p className="mt-4 text-lg leading-relaxed text-muted">{post.summary}</p>
            )}
            {post.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            )}
          </header>

          <div
            className="post-body mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <div className="mt-16 border-t border-line pt-6">
          <Link href="/blog" className={backLink}>
            <FiArrowLeft aria-hidden="true" />
            Back to all posts
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
