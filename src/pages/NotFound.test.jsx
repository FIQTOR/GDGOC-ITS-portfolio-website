import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

test("renders the 404 page with a link back home", () => {
    render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /go to main page/i })).toHaveAttribute(
        "href",
        "/"
    );
});
