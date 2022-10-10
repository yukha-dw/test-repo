import _test from "ava";
import { createApp } from "../src/app/app.js";

_test("test1", async (t) => {
  const app1 = createApp();
  const app2 = createApp();

  t.deepEqual((app1 as any).data.a, (app2 as any).data.a);
});

_test("test2", async (t) => {
  const app1 = createApp();
  const app2 = createApp();

  t.deepEqual((app1 as any).data.b, (app2 as any).data.b);
});
