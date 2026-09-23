// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which Framer Motion's
// `whileInView` relies on. Provide a minimal no-op mock so components
// using scroll-reveal animations can render in tests.
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserverMock;
