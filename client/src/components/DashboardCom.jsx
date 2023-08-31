import React, { useState } from "react";
import Orders from "./Orders";
import Ordercurrent from "./Ordercurrent";

const DashboardCom = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white ">
        Dashboard
      </h1>
      <div className="flex gap-[2rem] wrap">
        <section>
          <Ordercurrent />
        </section>
        <section>
          <Orders />
        </section>
      </div>
    </>
  );
};

export default DashboardCom;
