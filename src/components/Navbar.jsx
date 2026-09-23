import { navLinks, sectionIds } from "../data/portfolio";
import useScrollSpy from "../hooks/useScrollSpy";

/**
 * Floating pill navbar.
 *
 * The link of the section currently in view gets the filled pill treatment,
 * which replaces the previous hard-coded highlight on "Contact".
 */
export default function Navbar() {
    const activeId = useScrollSpy(sectionIds);

    return (
        <nav
            aria-label="Section navigation"
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-6 px-6 py-3 bg-zinc-950/60 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl">
                {navLinks.map(({ id, label }) => {
                    const isActive = activeId === id;

                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={isActive ? "true" : undefined}
                            className={
                                isActive
                                    ? "text-sm font-medium text-white bg-zinc-800 px-4 py-1.5 rounded-full transition-colors"
                                    : "text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            }
                        >
                            {label}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
