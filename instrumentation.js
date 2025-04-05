export async function register() {
  // if (process.env.NEXT_RUNTIME === "nodejs") {
  //   const { server } = await import("./msw/setup/server");
  //   server.listen();
  //   console.log("Mock server is running!");
  // }
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initMocks } = await import("./msw/setup");
    initMocks();
    console.log("Mock server is running!");
  }
}
