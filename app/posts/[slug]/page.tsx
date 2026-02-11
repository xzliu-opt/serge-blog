import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return {
        title: `${post.title} — Serge`,
        description: post.excerpt,
    };
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <article className="animate-fade-in">
            {/* Back link */}
            <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#86868B] transition-opacity hover:opacity-60 mb-10"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="translate-y-[0.5px]"
                >
                    <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Back to Home
            </Link>

            {/* Post header */}
            <header className="mb-10">
                <time className="text-[13px] font-medium text-[#86868B] uppercase tracking-wide">
                    {formatDate(post.date)}
                </time>
                <h1 className="mt-2 text-[34px] font-bold tracking-tight leading-[1.1] text-[#1D1D1F]">
                    {post.title}
                </h1>
                <p className="mt-3 text-[15px] text-[#86868B]">By {post.author}</p>
            </header>

            {/* Markdown body */}
            <div className="prose animate-fade-in-delay">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                />
            </div>
        </article>
    );
}
