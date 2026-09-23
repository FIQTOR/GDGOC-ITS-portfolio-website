// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which is required by both
// framer-motion's `whileInView` and our own `useScrollSpy` hook. Provide a
// minimal no-op polyfill so component tests can render the real page.
if (typeof global.IntersectionObserver === 'undefined') {
    class MockIntersectionObserver {
        constructor() {
            this.observe = jest.fn();
            this.unobserve = jest.fn();
            this.disconnect = jest.fn();
            this.takeRecords = jest.fn(() => []);
        }
    }

    global.IntersectionObserver = MockIntersectionObserver;
    window.IntersectionObserver = MockIntersectionObserver;
}
