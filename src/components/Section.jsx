import { motion } from "framer-motion";

/**
 * Shared entrance animation used by every section.
 * Kept at module scope so the object reference is stable across renders.
 */
export const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const defaultViewport = { once: true, margin: "-100px" };

/**
 * Section title with a small icon chip, used by Skills and Projects.
 */
export function SectionHeading({ icon: Icon, children }) {
    return (
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                <Icon size={24} />
            </span>
            {children}
        </h3>
    );
}

/**
 * Scroll-reveal wrapper for a page section.
 *
 * Every section previously repeated the same five framer-motion props; this
 * centralises them so the reveal behaviour can be tuned in one place.
 */
export default function Section({
    id,
    className = "",
    viewport = defaultViewport,
    children,
    ...rest
}) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeIn}
            className={className}
            {...rest}
        >
            {children}
        </motion.section>
    );
}
