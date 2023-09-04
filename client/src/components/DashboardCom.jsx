import React, { useState } from "react";
import Orders from "./Orders";
import Ordercurrent from "./Ordercurrent";
import Dashtable from "./Dashtable";

const DashboardCom = () => {
  return (
    <>
      <div className="flex-col gap-[2rem] wrap">
        <section>
          <Ordercurrent />
          <Dashtable />
        </section>
        {/* <section>
          <Orders />
        </section> */}
      </div>
    </>
  );
};

export default DashboardCom;
