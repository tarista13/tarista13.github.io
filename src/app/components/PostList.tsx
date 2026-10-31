import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";
import Tag from "./Tag";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-sm text-muted">No posts yet. Check back soon.</p>;
  }

  return (
    <ul className="divide-y divide-line">
      {posts.map((post) => (
        <li key={post.slug} className="group relative py-5 first:pt-0 last:pb-0">
          <p className="font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            {post.readingMinutes} min read
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            <Link
              href={`/blog/${post.slug}`}
              className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-white/60 after:absolute after:inset-0 after:content-['']"
            >
              {post.title}
            </Link>
          </h3>
          {post.summary && (
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {post.summary}
            </p>
          )}
          {post.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
