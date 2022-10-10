import _test from "ava";
import { createData as cD1, createData2 as cD12 } from "../src/app/data.js";
import { createData as cD2, createData2 as cD22 } from "../src/app/data2.js";
import { createData as cD3, createData2 as cD32 } from "../src/app/data3.js";
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
  const data1 = cD1();
  const data2 = cD12();

  t.deepEqual(data1, data2);
});

_test("test4", async (t) => {
  const data1 = cD2();
  const data2 = cD22();

  t.deepEqual(data1, data2);
});

_test("test5", async (t) => {
  const data1 = cD3();
  const data2 = cD32();

  t.deepEqual(data1, data2);
});
