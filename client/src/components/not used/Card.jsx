import React, { useEffect, useState } from 'react';
import socket from '../../../socket/socket';

const Card = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on('neworder', (data) => {
      
      setNotifications((prev) => [...prev, data]);
    });
    
  }, [socket]);

  const displayNotification = () => {
    return (
      <span className="notification">{`customer created a new order.`}</span>
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
          <button className="nButton bg-gray-50 shadow-xl" onClick={handleRead}>
            Mark as read
            {/* https://flowbite.com/docs/components/toast/#push-notification */}
            {/* <div className="flex items-center">
              <div className="ml-3 text-sm font-normal">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </div>
                <div className="text-sm font-normal">
                  commmented on your photo
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                  a few seconds ago
                </span>
              </div>
            </div> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
