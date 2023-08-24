import React, { useState } from "react";
import Orders from "../components/Orders";
import Chat from "../components/Chat";
import Userprofile from "../components/Userprofile";
import NavbarSide from "../components/NavbarSide";

// Based on wireframe, we need to create button to change the display the content to be shown

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(0);
  return (
    <section
      className="flex max-w-screen-xl  mx-auto pb-[2rem] gap-[10rem]
    "
    >
      <div>
        <NavbarSide displayPage={displayPage} setDisplayPage={setDisplayPage} />
      </div>
      <div>
        {/* {displayPage === 0 && <Overview />} */}
        {displayPage === 0 && <Orders />}
        {displayPage === 1 && <Userprofile />}
        {displayPage === 2 && <Chat />}
      </div>
    </section>
  );
};

export default Dashboard;
