import { renderHook } from "@testing-library/react";
import useScrollSpy from "./useScrollSpy";

test("returns the first id as the initial active section", () => {
    const { result } = renderHook(() => useScrollSpy(["about", "skills"]));

    expect(result.current).toBe("about");
});

test("returns null when no ids are provided", () => {
    const { result } = renderHook(() => useScrollSpy([]));

    expect(result.current).toBeNull();
});

test("observes the elements that exist in the DOM", () => {
    const observed = [];
    const original = global.IntersectionObserver;

    global.IntersectionObserver = class {
        constructor() {}
        observe(element) {
            observed.push(element.id);
        }
        disconnect() {}
        unobserve() {}
    };

    document.body.innerHTML =
        '<section id="about"></section><section id="skills"></section>';

    renderHook(() => useScrollSpy(["about", "skills", "missing"]));

    expect(observed).toEqual(["about", "skills"]);

    global.IntersectionObserver = original;
});
