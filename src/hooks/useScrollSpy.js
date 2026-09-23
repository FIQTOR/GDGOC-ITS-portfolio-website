import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently in view.
 *
 * Uses an IntersectionObserver with a band around the middle of the viewport
 * (the `rootMargin`) so the active entry flips roughly when a section reaches
 * the vertical center — a much cheaper alternative to a scroll listener.
 *
 * @param {string[]} ids     Section ids to observe, in document order.
 * @param {object}   options
 * @param {string}   options.rootMargin Band that counts as "active".
 * @returns {string|null} The id of the section currently in view.
 */
export default function useScrollSpy(
    ids,
    { rootMargin = "-45% 0px -50% 0px" } = {}
) {
    const [activeId, setActiveId] = useState(ids[0] ?? null);

    useEffect(() => {
        // Guard for environments without IntersectionObserver (jsdom, SSR,
        // very old browsers): fall back to the first section.
        if (typeof IntersectionObserver === "undefined") {
            return undefined;
        }

        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (elements.length === 0) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const mostVisible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )[0];

                if (mostVisible) {
                    setActiveId(mostVisible.target.id);
                }
            },
            { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [ids, rootMargin]);

    return activeId;
}
