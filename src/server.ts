import { createApp } from "./app/app.js";

async function init() {
  const app = createApp();
  await app.listen({
    port: 3333,
    host: "0.0.0.0",
  });
}

init();
