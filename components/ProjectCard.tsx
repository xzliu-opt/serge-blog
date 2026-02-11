import type { Project } from "@/config/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group block"
            aria-label={`${project.title} — ${project.description}`}
        >
            {/* External-link icon */}
            <svg
                className="absolute top-6 right-6 h-4 w-4 text-[#86868B] transition-colors group-hover:text-[#1D1D1F]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg>

            <h3 className="text-[21px] font-semibold tracking-tight text-[#1D1D1F]">
                {project.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#86868B]">
                {project.description}
            </p>
        </a>
    );
}
