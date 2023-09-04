import React from "react";
import { useEffect, useState } from "react";
import socket from "../../socket/socket";
// import bell from "../img/bell.svg";
import bell from "../assets/bell.png";

// import notification from "../img/notification.svg";

const Bell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("neworder", (data) => {
      console.log("🚀 ~ file: Card.jsx:10 ~ socket.on ~ data:", data);
      setNotifications((prev) => [...prev, data]);
    });
    console.log(notifications);
  }, [socket]);

  const displayNotification = (data) => {
    return (
      <p className="notification">
        a new order by {data.customer} from {data.pickupLocation} to
        {data.dropLocation} is waiting to be claimed
      </p>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <>
    <div className="navbar">
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          {/* <img src={Notification} alt="Notification" /> */}
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={bell} className="mr-3 h-3 sm:h-5" alt="notification" />
        </div>
        {/* <div className="icon" onClick={() => setOpen(!open)}>
          <img alt="icon2" />
        </div> */}
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>

    {/* flowbite bell */}

    </>
  );
};

export default Bell;
