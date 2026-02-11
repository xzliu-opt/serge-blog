import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-12 max-w-2xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-[15px] font-semibold tracking-tight text-[#1D1D1F] transition-opacity hover:opacity-60"
                >
                    Serge
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-[13px] text-[#86868B] transition-opacity hover:opacity-60"
                    >
                        Blog
                    </Link>
                </div>
            </nav>
        </header>
    );
}
