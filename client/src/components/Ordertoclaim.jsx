import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import OrderCards from "./OrderCards";
import { v4 as uuidv4 } from "uuid";

const Ordertoclaim = () => {
  const [Orders, setOrders] = useState(null); // Orders array from backend
  useEffect(() => {
    axios.get(`/api/Orders/toclaim`).then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white ">
        Orders to be claimed
      </h1>
      <ul className="flex-col ">
        {Orders &&
          Orders.map((order) => (
            <li key={uuidv4()} className="mb-[2rem]">
              <OrderCards order={order} Orders={Orders} setOrders={setOrders} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Ordertoclaim;
