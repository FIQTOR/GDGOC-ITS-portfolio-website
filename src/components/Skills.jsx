import { TbCpu } from "react-icons/tb";
import Section, { SectionHeading } from "./Section";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
    return (
        <Section id="skills" className="flex flex-col gap-8">
            <SectionHeading icon={TbCpu}>Technologies &amp; Skills</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className={`p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors${
                            group.wide ? " sm:col-span-2" : ""
                        }`}
                    >
                        <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                            {group.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
