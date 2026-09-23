import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TbBrandGithub, TbMail } from "react-icons/tb";
import { profile } from "../data/portfolio";

/**
 * Hero section with the per-letter GSAP intro.
 *
 * The timeline is created inside `gsap.context` scoped to the section, so all
 * inline styles are reverted on unmount instead of leaking between routes.
 */
export default function Hero() {
    const rootRef = useRef(null);
    const heroDescRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Per-letter animation for the name
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
                    delay: 0.2,
                }
            );

            // Description slide up animation
            tl.fromTo(
                heroDescRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={rootRef}
            className="flex flex-col items-center sm:items-start text-center sm:text-left pt-10"
        >
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight [perspective:1000px]">
                {profile.name.split("").map((char, index) => (
                    <span
                        key={`${char}-${index}`}
                        className="hero-letter inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>

            <div
                ref={heroDescRef}
                className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 w-full"
            >
                <div className="max-w-xl">
                    <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                        {profile.role}
                    </h2>
                    <p className="text-zinc-500 leading-relaxed mt-4 text-lg">
                        {profile.tagline}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-8">
                        <a
                            href={`mailto:${profile.email}`}
                            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            <TbMail size={20} /> Let's Talk
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-all inline-flex items-center gap-2"
                        >
                            <TbBrandGithub size={20} /> GitHub
                        </a>
                    </div>
                </div>

                {/* Profile picture with glow effect */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="w-full h-full bg-zinc-900 rounded-full border-2 border-zinc-700/50 overflow-hidden relative z-10 flex items-center justify-center">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
