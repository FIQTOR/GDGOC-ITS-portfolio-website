import { TbCode, TbDatabase, TbExternalLink } from "react-icons/tb";
import Section, { SectionHeading } from "./Section";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {
    return (
        <article className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-600 transition-all duration-500">
            {/* Visual area */}
            <div className="h-48 sm:h-64 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-5 relative z-20">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                            <TbCode className="text-white" size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h4>
                    </div>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="shrink-0 text-zinc-500 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-800"
                        >
                            <TbExternalLink size={20} />
                        </a>
                    )}
                </div>

                <p className="text-zinc-400 leading-relaxed text-lg">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => {
                        const { label, accent } =
                            typeof tag === "string" ? { label: tag } : tag;

                        return (
                            <span
                                key={label}
                                className={
                                    accent
                                        ? "text-sm font-medium px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                                        : "text-sm font-medium px-3 py-1.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-full"
                                }
                            >
                                {label}
                            </span>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <Section id="projects" className="flex flex-col gap-8">
            <SectionHeading icon={TbDatabase}>
                Featured Projects
            </SectionHeading>

            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </Section>
    );
}
