import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="mb-16 pt-8">
        <h1 className="text-[34px] font-bold tracking-tight leading-[1.1] text-[#1D1D1F]">
          Serge
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-[#86868B]">
          Thoughts on design, engineering, and building products that matter.
        </p>
      </section>

      {/* Post feed */}
      <section>
        <div className="space-y-1">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block rounded-2xl px-1 py-6 transition-colors hover:bg-[#F5F5F7] -mx-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <time className="text-[13px] font-medium text-[#86868B] uppercase tracking-wide">
                {formatDate(post.date)}
              </time>
              <h2 className="mt-1.5 text-[21px] font-semibold tracking-tight text-[#1D1D1F] leading-snug group-hover:text-[#06c] transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#86868B] line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
