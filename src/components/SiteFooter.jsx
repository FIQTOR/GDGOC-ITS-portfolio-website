import { builtWith, profile } from "../data/portfolio";

/**
 * Site-wide footer. Replaces the old `components/footer.jsx`, which was never
 * imported by any route and contained leftover copy from an unrelated project.
 */
export default function SiteFooter() {
    return (
        <footer className="border-t border-zinc-900 bg-zinc-950/50">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                <p>
                    © {new Date().getFullYear()}{" "}
                    <a
                        href={profile.website}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-300 transition-colors"
                    >
                        fiqtor.com
                    </a>
                    . All rights reserved.
                </p>
                <p className="flex items-center gap-1">
                    Built with{" "}
                    {builtWith.map((item, index) => (
                        <span key={item} className="flex items-center gap-1">
                            {index > 0 && (
                                <span className="text-zinc-600">
                                    {index === builtWith.length - 1 ? "&" : ","}
                                </span>
                            )}
                            <span className="text-white">{item}</span>
                        </span>
                    ))}
                </p>
            </div>
        </footer>
    );
}
