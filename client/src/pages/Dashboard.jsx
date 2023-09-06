import React, { useState } from "react";
import Orders from "../components/Orders";
import Chat from "../components/Chat";
import Userprofile from "../components/Userprofile";
import NavbarSide from "../components/NavbarSide";
import Ordertoclaim from "../components/Ordertoclaim";
import NewOrder from "./NewOrder";
import DashboardCom from "../components/DashboardCom";
import Contact from "./Contact";

// import runningCat from "../assets/runningCat.jpg";

// Based on wireframe, we need to create button to change the display the content to be shown

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(5);
  return (
    // Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover ---
    <section className="flex max-w-screen-xxl bg-gradient-to-t from-primary-50 to-primary-50">
      <div>
        <NavbarSide displayPage={displayPage} setDisplayPage={setDisplayPage} />
      </div>
      <div className="flex-col mx-auto pt-[2rem] bg-gradient-to-t from-primary-50 to-primary-50 p-10">
        {/* {displayPage === 0 && <Overview />} */}

        {displayPage === 5 && <DashboardCom />}
        {displayPage === 3 && <Ordertoclaim />}
        {displayPage === 0 && <Orders />}
        {displayPage === 1 && <Userprofile />}
        {displayPage === 2 && <Contact />}
        {displayPage === 4 && <NewOrder />}
      </div>
    </section>
  );
};

export default Dashboard;
