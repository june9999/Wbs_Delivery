import React, { useState } from "react";
import Orders from "../components/Orders";
import Chat from "../components/Chat";
import Userprofile from "../components/Userprofile";
import NavbarSide from "../components/NavbarSide";
import Ordertoclaim from "../components/Ordertoclaim";
import NewOrder from "./NewOrder";

// import runningCat from "../assets/runningCat.jpg";

// Based on wireframe, we need to create button to change the display the content to be shown

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(0);
  return (
    // Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover ---
    <section className="flex max-w-screen-xl  mx-auto pb-[2rem] gap-[10rem]">
      <div>
        <NavbarSide displayPage={displayPage} setDisplayPage={setDisplayPage} />
      </div>
      <div>
        {/* {displayPage === 0 && <Overview />} */}
        {displayPage === 3 && <Ordertoclaim />}
        {displayPage === 0 && <Orders />}
        {displayPage === 1 && <Userprofile />}
        {displayPage === 2 && <Chat />}
        {displayPage === 4 && <NewOrder />}
      </div>
    </section>
  );
};

export default Dashboard;
