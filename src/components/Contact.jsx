import { TbBrandLinkedin, TbMail } from "react-icons/tb";
import Section from "./Section";
import { profile } from "../data/portfolio";

export default function Contact() {
    return (
        <Section
            id="contact"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center gap-6 py-20 border-t border-zinc-900"
        >
            <h3 className="text-3xl font-bold text-white">
                Let's Collaborate
            </h3>
            <p className="text-zinc-400 max-w-lg mb-4 text-lg">
                I am currently open to new opportunities. Whether you have a
                question, want to discuss an idea, or just want to say hi, I will
                try my best to get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
                >
                    <TbMail size={24} />
                    <span className="font-medium">{profile.email}</span>
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#0A66C2] hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
                >
                    <TbBrandLinkedin size={24} />
                    <span className="font-medium">LinkedIn</span>
                </a>
            </div>
        </Section>
    );
}
