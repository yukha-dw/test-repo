import _test from "ava";
import { createApp } from "../src/app/app.js";

_test("test1", async (t) => {
  const app1 = createApp();
  const app2 = createApp();

  t.deepEqual((app1 as any).data1.a, (app2 as any).data1.a);
});

_test("test2", async (t) => {
  const app1 = createApp();
  const app2 = createApp();

  t.deepEqual((app1 as any).data1.b, (app2 as any).data1.b);
});

_test("test3", async (t) => {
  const app1 = createApp();
  const app2 = createApp();

  t.deepEqual((app1 as any).data1, (app2 as any).data12);
  t.deepEqual((app1 as any).data2, (app2 as any).data22);
  t.deepEqual((app1 as any).data3, (app2 as any).data32);
  t.deepEqual((app1 as any).data4, (app2 as any).data42);
});

_test("test4", async (t) => {
  const app1 = createApp();
  const dataFail = {
    a: 2,
    b: 2,
    c: 2,
  }

  t.deepEqual((app1 as any).data1, dataFail);
});
