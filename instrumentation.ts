export async function register() {
  // Node.js 22+ exposes a global `localStorage` that is non-functional without
  // --localstorage-file, causing Next.js internal checks to crash on the server.
  // Removing it here restores the expected undefined-in-SSR behaviour.
  if (
    typeof localStorage !== "undefined" &&
    typeof localStorage.getItem !== "function"
  ) {
    // @ts-ignore
    delete globalThis.localStorage;
  }
}
