import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
    TbBrandGithub,
    TbBrandLinkedin,
    TbMail,
    TbExternalLink,
    TbCode,
    TbTerminal2,
    TbDatabase,
    TbCpu
} from "react-icons/tb";

export default function Homepage() {
    const heroTextRef = useRef(null);
    const heroDescRef = useRef(null);

    // GSAP animation on page load
    useEffect(() => {
        const tl = gsap.timeline();

        // Per-letter animation for Name
        tl.fromTo(
            ".hero-letter",
            { y: 40, opacity: 0, rotateX: -90 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)",
                delay: 0.2
            }
        );

        // Description slide up animation
        tl.fromTo(
            heroDescRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        );
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const name = "Taufiiqul Hakim";

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black relative overflow-hidden">

            {/* BACKGROUND ELEMENTS (Grid + Ambient Glow) */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20" />
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none -z-10" />

            {/* FLOATING NAVBAR */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-6 px-6 py-3 bg-zinc-950/60 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl">
                    <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
                    <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
                    <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-sm font-medium text-white bg-zinc-800 px-4 py-1.5 rounded-full hover:bg-zinc-700 transition-colors">Contact</a>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-32 sm:py-40 flex flex-col gap-32">

                {/* HERO SECTION */}
                <section className="flex flex-col items-center sm:items-start text-center sm:text-left pt-10">

                    <h1
                        ref={heroTextRef}
                        className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight [perspective:1000px]"
                    >
                        {name.split("").map((char, index) => (
                            <span
                                key={index}
                                className="hero-letter inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>

                    <div ref={heroDescRef} className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 w-full">
                        <div className="max-w-xl">
                            <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                                Fullstack Developer & Creative Technologist
                            </h2>
                            <p className="text-zinc-500 leading-relaxed mt-4 text-lg">
                                Building modern web applications with high performance, clean user interfaces, and reliable backend scalability.
                            </p>

                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-8">
                                <a href="mailto:taufiq07326@gmail.com" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <TbMail size={20} /> Let's Talk
                                </a>
                                <a href="https://github.com/FIQTOR" target="_blank" rel="noreferrer" className="bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-all inline-flex items-center gap-2">
                                    <TbBrandGithub size={20} /> GitHub
                                </a>
                            </div>
                        </div>

                        {/* Profile Picture with Glow Effect */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                            <div className="w-full h-full bg-zinc-900 rounded-full border-2 border-zinc-700/50 overflow-hidden relative z-10 flex items-center justify-center">
                                <img
                                    src="/icon.webp" // Replace with actual photo
                                    alt="Taufiiqul Hakim"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT SECTION */}
                <motion.section
                    id="about"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="relative p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-zinc-800 text-zinc-300"><TbTerminal2 size={24} /></span>
                        About Me
                    </h3>
                    <div className="text-zinc-400 leading-relaxed space-y-4 text-lg">
                        <p>
                            I am a Fullstack Developer with a deep interest in exploring new technologies, ranging from modern web development and cloud architecture to blockchain ecosystems and AI integration.
                        </p>
                        <p>
                            I enjoy the process of transforming complex ideas into structured, efficient, and user-friendly systems. To me, <i>code</i> is not just a set of instructions for a machine, but a tool to create meaningful digital experiences.
                        </p>
                    </div>
                </motion.section>

                {/* SKILLS SECTION (Categorized) */}
                <motion.section
                    id="skills"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-zinc-800 text-zinc-300"><TbCpu size={24} /></span>
                        Technologies & Skills
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Frontend */}
                        <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                            <h4 className="text-white font-medium mb-4 flex items-center gap-2">Frontend & UI</h4>
                            <div className="flex flex-wrap gap-2">
                                {["NextJS", "ReactJS", "TypeScript", "JavaScript", "TailwindCSS", "Bootstrap", "HTML5", "CSS3", "Framer", "Swiper"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Backend & Cloud */}
                        <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                            <h4 className="text-white font-medium mb-4 flex items-center gap-2">Backend, Database & Cloud</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Node", "Express", "PHP", "Laravel", "MySQL", "Postgresql", "Mariadb", "Amazonaws", "Amazonrds", "Vercel", "Docker", "Cpanel"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Core & Others */}
                        <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors sm:col-span-2">
                            <h4 className="text-white font-medium mb-4 flex items-center gap-2">Languages, Game Dev, AI & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Cplusplus", "CSharp", "Python", "Lua", "Solidity", "Unity", "Blockchain", "Openai", "N8N", "Git", "Githubpages", "Jsonwebtokens", "Redux", "Axios", "JQuery"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* PROJECTS SECTION */}
                <motion.section
                    id="projects"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-zinc-800 text-zinc-300"><TbDatabase size={24} /></span>
                        Featured Projects
                    </h3>

                    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-600 transition-all duration-500">
                        {/* Image Placeholder / Visual Area */}
                        <div className="h-48 sm:h-64 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                            {/* Decorative 3D Elements Placeholder */}
                            <img src="/img/particle-handtracker.webp" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="p-6 sm:p-8 flex flex-col gap-5 relative z-20">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                                        <TbCode className="text-white" size={20} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        Interactive 3D Particle Engine
                                    </h4>
                                </div>
                                <a href="https://fiqtor.com" className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-800">
                                    <TbExternalLink size={20} />
                                </a>
                            </div>

                            <p className="text-zinc-400 leading-relaxed text-lg">
                                A real-time interactive 3D particle system using Three.js. This project integrates camera-based hand gesture recognition, allowing users to directly manipulate custom shapes through a seamless and responsive web interface.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="text-sm font-medium px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">Three.js</span>
                                <span className="text-sm font-medium px-3 py-1.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-full">React</span>
                                <span className="text-sm font-medium px-3 py-1.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-full">Computer Vision</span>
                                <span className="text-sm font-medium px-3 py-1.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-full">WebGL</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CONTACT SECTION */}
                <motion.section
                    id="contact"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeIn}
                    className="flex flex-col items-center text-center gap-6 py-20 border-t border-zinc-900"
                >
                    <h3 className="text-3xl font-bold text-white">Let's Collaborate</h3>
                    <p className="text-zinc-400 max-w-lg mb-4 text-lg">
                        I am currently open to new opportunities. Whether you have a question, want to discuss an idea, or just want to say hi, I will try my best to get back to you as soon as possible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href="mailto:taufiq07326@gmail.com"
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
                        >
                            <TbMail size={24} />
                            <span className="font-medium">taufiq07326@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/fiqtor"
                            target="_blank" rel="noreferrer"
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#0A66C2] hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
                        >
                            <TbBrandLinkedin size={24} />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </motion.section>

            </main>

            {/* FOOTER */}
            <footer className="border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} <a href="https://fiqtor.com" target="_blank" rel="noreferrer">fiqtor.com</a>. All rights reserved.</p>
                    <p className="flex items-center gap-1">Built with <span className="text-white">React</span>, <span className="text-white">Tailwind</span> & <span className="text-white">GSAP</span></p>
                </div>
            </footer>
        </div>
    );
}