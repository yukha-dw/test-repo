import fastify from "fastify";
import { createData } from "./data.js";

export const createApp = () => {
  const app = fastify();
  const data = createData();
  app.decorate("data", data);
  return app;
};
