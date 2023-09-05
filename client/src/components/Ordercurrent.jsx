import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import OrderCards from "./OrderCards";
import { v4 as uuidv4 } from "uuid";

const Ordercurrent = () => {
  const [Orders, setOrders] = useState(null); // Orders array from backend
  useEffect(() => {
    axios
      .get(`/api/Orders/currentOrder`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white ">
        Current Orders
      </h1>
      <ul className="flex gap-[1rem] w-[80rem] ">
        {Orders &&
          Orders.map((order) => (
            <li key={uuidv4()} className="mb-[2rem] ">
              <OrderCards order={order} Orders={Orders} setOrders={setOrders} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Ordercurrent;
