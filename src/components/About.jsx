import { TbTerminal2 } from "react-icons/tb";
import Section from "./Section";

export default function About() {
    return (
        <Section
            id="about"
            className="relative p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                    <TbTerminal2 size={24} />
                </span>
                About Me
            </h3>
            <div className="text-zinc-400 leading-relaxed space-y-4 text-lg">
                <p>
                    I am a Fullstack Developer with a deep interest in exploring
                    new technologies, ranging from modern web development and
                    cloud architecture to blockchain ecosystems and AI
                    integration.
                </p>
                <p>
                    I enjoy the process of transforming complex ideas into
                    structured, efficient, and user-friendly systems. To me,{" "}
                    <i>code</i> is not just a set of instructions for a machine,
                    but a tool to create meaningful digital experiences.
                </p>
            </div>
        </Section>
    );
}
