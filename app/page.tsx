import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

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
      {/* Hero — full width */}
      <section className="mb-12 pt-8 max-w-2xl">
        <h1 className="text-[34px] font-bold tracking-tight leading-[1.1] text-[#1D1D1F]">
          Serge
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-[#86868B]">
          Thoughts on design, engineering, and building products that matter.
        </p>
      </section>

      {/* Two-column layout: posts left, projects right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
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

        {/* Selected Projects — sidebar */}
        <aside className="lg:sticky lg:top-24">
          <h2 className="text-[17px] font-bold tracking-tight text-[#1D1D1F] mb-4">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
