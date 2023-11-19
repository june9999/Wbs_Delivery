import React, { useState } from "react";
import Ordercurrent from "./Ordercurrent";
import Dashtable from "./Dashtable";

const DashboardCom = () => {
  return (
    <>
      <div className="flex flex-col gap-[2rem] flex-wrap">
        <section className="">
          <Ordercurrent />
          <Dashtable />
        </section>
      </div>
    </>
  );
};

export default DashboardCom;
