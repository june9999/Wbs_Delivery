import React, { useState } from 'react';
import Orders from '../components/Orders';
import Chat from '../components/Chat';
import Userprofile from '../components/Userprofile';
import NavbarSide from '../components/NavbarSide';
import runningCat from '../assets/runningCat.jpg';

// Based on wireframe, we need to create button to change the display the content to be shown

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(0);
  return (
    // Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover ---
    <section
      className="flex max-w-screen-xxl  mx-auto pb-[2rem] gap-[10rem]"
      style={{ opacity: 0.99, position: 'relative' }}
    >
      <img
        src={runningCat}
        alt="Transparent Image"
        style={{
          opacity: 0.3,
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
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
