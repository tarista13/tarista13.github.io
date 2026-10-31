import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Every .md file in this folder is a post; the filename (minus .md) becomes the URL slug.
// Files starting with "_" are ignored, and posts with `draft: true` only show up in `npm run dev`.
const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const data: Record<string, string | string[]> = {};
  if (!match) return { data, body: source };

  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    data[key] =
      raw.startsWith("[") && raw.endsWith("]")
        ? raw
            .slice(1, -1)
            .split(",")
            .map((item) => unquote(item.trim()))
            .filter(Boolean)
        : unquote(raw);
  }

  return { data, body: source.slice(match[0].length) };
}

function unquote(value: string) {
  return value.replace(/^["'](.*)["']$/, "$1");
}

function readPost(slug: string): (Post & { draft: boolean }) | null {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, body } = parseFrontmatter(fs.readFileSync(file, "utf8"));
  const words = body.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingMinutes: Math.max(1, Math.round(words / 200)),
    draft: data.draft === "true",
    html: marked.parse(body, { async: false }),
  };
}

function isVisible(post: { draft: boolean }) {
  return !post.draft || process.env.NODE_ENV === "development";
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => readPost(file.replace(/\.md$/, "")))
    .filter((post): post is Post & { draft: boolean } => !!post && isVisible(post))
    .sort((a, b) => b.date.localeCompare(a.date))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ html, draft, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  const post = readPost(slug);
  return post && isVisible(post) ? post : null;
}

export function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
