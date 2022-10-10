import fastify from "fastify";
import { createData as cD1, createData2 as cD12 } from "./data.js";
import { createData as cD2, createData2 as cD22 } from "./data2.js";
import { createData as cD3, createData2 as cD32 } from "./data3.js";
import { createData as cD4, createData2 as cD42 } from "./data4.js";

export const createApp = () => {
  const app = fastify();
  const data1 = cD1();
  const data2 = cD2();
  const data3 = cD3();
  const data4 = cD4();
  app.decorate("data1", data1);
  app.decorate("data2", data2);
  app.decorate("data3", data3);
  app.decorate("data4", data4);

  const data12 = cD12();
  const data22 = cD22();
  const data32 = cD32();
  const data42 = cD42();
  app.decorate("data12", data12);
  app.decorate("data22", data22);
  app.decorate("data32", data32);
  app.decorate("data42", data42);

  if (data1 !== data12) {
    const integer = 1;
    const integer2 = 2;
    let integer3 = integer + integer2;
    integer3 *= 3;
    console.log(integer3);
    app.decorate("integer3", integer3);
  } else {
    const integer = 4;
    const integer2 = 5;
    let integer3 = integer + integer2;
    integer3 *= 6;
    console.log(integer3);
    app.decorate("integer3", integer3);
  }

  return app;
};
