export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = await import("./mock/node");
    server.listen();
    console.log("Mock server is running!");
  }
}
