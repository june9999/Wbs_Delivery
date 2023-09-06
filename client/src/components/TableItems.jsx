import React from "react";
import { AuthContext } from "../context/Auth";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axiosInstance";
import { useContext } from "react";

function TableItems({ order, Orders, setOrders }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(Orders);
  const handleDelete = () => {
    axios
      .delete(`/api/Orders/${order._id}`)
      .then((res) => {
        const newOrders = Orders.filter((e) => e._id !== order._id);
        setOrders(newOrders);
      })
      .catch((e) => console.log(e));
  };

  const handleClaim = () => {
    order.claimed = true;
    order.employeeId = user._id;
    console.log("🚀 ~ file: OrderCards.jsx:26 ~ axios.put ~ order:", order);
    axios.put(`/api/Orders/${id}`, order).then((res) => {
      const newOrders = Orders.filter((e) => e._id !== order._id);
      setOrders(newOrders);
    });
  };

  const handleFinishedOrder = () => {
    order.delivered = true;
    axios.put(`/api/Orders/${id}`, order).then((res) => {
      const newOrders = Orders.filter((e) => e._id !== order._id);
      setOrders(newOrders);
    });
  };

  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      {/* <th
        scope="row"
        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {order._id}
      </th> */}

      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">{order.pickupLocation}</div>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.dropLocation}
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.employeeId?.username || ""}
      </td>
      {/* <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">{order.employeeId?._id || ""}</div>
      </td> */}
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2 text-gray-400"
            aria-hidden="true"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          {order.delivered
            ? "Order ended"
            : order.claimed
            ? "Order claimed"
            : order.paid
            ? "Order to be claim"
            : "Waiting for Payment"}
        </div>
      </td>
      <td className="px-4 py-2">${order.price}</td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.updatedAt}
      </td>
      <td>
        <div>
          <button
            onClick={() => {
              navigate(`/orders/${order._id}`);
            }}
            type="submit"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-[1rem]"
          >
            Details
          </button>
          {/* condition1 */}
          {order.claimed === false && user.userType === "employee" && (
            <button
              onClick={handleClaim}
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2"
            >
              Pick up
            </button>
          )}
          {/* condition2 */}
          {order.claimed === false && user.userType === "customer" && (
            <button
              onClick={handleDelete}
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2"
            >
              Cancel
            </button>
          )}
          {/* condition3 */}
          {/* {order.claimed === true &&
            user.userType === "customer" && */}
          {/* <button
              onClick={() => {
                navigate(`/orders/${order._id}/comments`);
              }}
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Evaluaton
            </button> */}
          {/* } */}
          {/* condition4 */}
          {order.claimed === true &&
            user.userType === "employee" &&
            order.delivered === false && (
              <button
                onClick={handleFinishedOrder}
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Finish
              </button>
            )}
          {/* condition 5 */}
          {/* {user.userType === "customer" && order.delivered === true && () */}
          {/* condition 6 */}
          {user.userType === "customer" && order.delivered === true && (
            <button
              onClick={() => {
                navigate(`/orders/${order._id}/comments`);
              }}
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Evaluaton
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableItems;
