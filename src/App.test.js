import { render, screen } from "@testing-library/react";
import App from "./App";
import { profile } from "./data/portfolio";

test("renders the homepage hero", () => {
    render(<App />);

    // The name is rendered letter-by-letter; the space becomes a non-breaking
    // space, so compare on normalised text content.
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent.replace(/\u00A0/g, " ")).toBe(profile.name);

    expect(
        screen.getByRole("heading", { name: profile.role })
    ).toBeInTheDocument();
});

test("renders the primary navigation and hero call to action", () => {
    render(<App />);

    expect(
        screen.getByRole("navigation", { name: /section navigation/i })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", { name: /let's talk/i })
    ).toHaveAttribute("href", `mailto:${profile.email}`);
});
