import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import OrderCards from "./OrderCards";

const Orders = () => {
  const [Orders, setOrders] = useState(null); // Orders array from backend
  useEffect(() => {
    axios
      .get(`/api/Orders`)
      .then((res) => setOrders(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-[2rem]">
        Past Orders
      </h1>
      <ul className="flex-col ">
        {Orders &&
          Orders.map((order) => (
            <li className="mb-[2rem]">
              <OrderCards order={order} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Orders;
