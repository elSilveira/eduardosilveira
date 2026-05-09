import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: () => "blob:test-url",
});

Object.defineProperty(URL, "revokeObjectURL", {
  writable: true,
  value: () => {},
});
