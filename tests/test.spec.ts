import _test from "ava";
import { createData, createData2 } from "../src/app/data.js";
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

_test("test3", async (t) => {
  const data1 = createData();
  const data2 = createData2();

  t.deepEqual(data1, data2);
});
