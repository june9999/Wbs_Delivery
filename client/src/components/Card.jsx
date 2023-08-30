import { useEffect, useState } from "react";
import socket from "../../socket/socket";

const Card = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("neworder", (data) => {
      console.log("🚀 ~ file: Card.jsx:10 ~ socket.on ~ data:", data);
      setNotifications((prev) => [...prev, data]);
    });
    console.log(notifications);
  }, [socket]);

  const displayNotification = () => {
    return (
      <span className="notification">{`cusotmer create a new order.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} alt="" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img alt="icon1" />
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img alt="icon2" />
        </div>
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
  );
};

export default Card;
