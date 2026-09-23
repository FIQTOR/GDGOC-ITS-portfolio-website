import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SiteFooter from "../components/SiteFooter";

export default function Homepage() {
    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black relative overflow-hidden">
            {/* Background elements (grid + ambient glow) */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20" />
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none -z-10" />

            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-32 sm:py-40 flex flex-col gap-32">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <SiteFooter />
        </div>
    );
}
