/**
 * Single source of truth for the portfolio content.
 *
 * Keeping copy and configuration here means the UI components stay purely
 * presentational: adding a project, a skill or a nav entry is a data-only
 * change that no longer requires touching JSX.
 */

export const profile = {
    name: "Taufiiqul Hakim",
    alias: "FIQTOR",
    role: "Fullstack Developer & Creative Technologist",
    tagline:
        "Building modern web applications with high performance, clean user interfaces, and reliable backend scalability.",
    email: "taufiq07326@gmail.com",
    github: "https://github.com/FIQTOR",
    linkedin: "https://www.linkedin.com/in/fiqtor",
    website: "https://fiqtor.com",
    avatar: "/icon.webp",
};

export const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

/**
 * Stable list of section ids used by the scroll-spy hook. Derived once at
 * module scope so its reference never changes between renders.
 */
export const sectionIds = navLinks.map(({ id }) => id);

export const skillGroups = [
    {
        title: "Frontend & UI",
        skills: [
            "NextJS",
            "ReactJS",
            "TypeScript",
            "JavaScript",
            "TailwindCSS",
            "Bootstrap",
            "HTML5",
            "CSS3",
            "Framer",
            "Swiper",
        ],
    },
    {
        title: "Backend, Database & Cloud",
        skills: [
            "Node",
            "Express",
            "PHP",
            "Laravel",
            "MySQL",
            "Postgresql",
            "Mariadb",
            "Amazonaws",
            "Amazonrds",
            "Vercel",
            "Docker",
            "Cpanel",
        ],
    },
    {
        title: "Languages, Game Dev, AI & Tools",
        wide: true,
        skills: [
            "Cplusplus",
            "CSharp",
            "Python",
            "Lua",
            "Solidity",
            "Unity",
            "Blockchain",
            "Openai",
            "N8N",
            "Git",
            "Githubpages",
            "Jsonwebtokens",
            "Redux",
            "Axios",
            "JQuery",
        ],
    },
];

/**
 * Featured projects. `tags` accepts plain strings, or objects with an
 * optional `accent: true` flag to highlight the primary technology.
 */
export const projects = [
    {
        title: "Interactive 3D Particle Engine",
        description:
            "A real-time interactive 3D particle system using Three.js. This project integrates camera-based hand gesture recognition, allowing users to directly manipulate custom shapes through a seamless and responsive web interface.",
        image: "/img/particle-handtracker.webp",
        url: "https://fiqtor.com",
        tags: [
            { label: "Three.js", accent: true },
            { label: "React" },
            { label: "Computer Vision" },
            { label: "WebGL" },
        ],
    },
];

export const builtWith = ["React", "Tailwind", "GSAP"];
