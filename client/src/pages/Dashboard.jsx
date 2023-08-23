import React, { useState } from "react";
import Orders from "../components/Orders";
import Chat from "../components/Chat";
import Userprofile from "../components/Userprofile";

// Based on wireframe, we need to create button to change the display the content to be shown

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(0);
  return (
    <>
      <div>SideBar</div>
      {displayPage === 0 && <Orders />}
      {displayPage === 1 && <Userprofile />}
      {displayPage === 2 && <Chat />}
    </>
  );
};

export default Dashboard;
