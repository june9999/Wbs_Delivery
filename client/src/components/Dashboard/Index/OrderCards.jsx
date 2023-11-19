import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../../axiosInstance";
import { AuthContext } from "../../../context/Auth";
import React, { useContext } from "react";

const OrderCards = ({ order, Orders, setOrders }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const id = order._id;
  const start = Date.now();
  console.log("🚀 ~ file: OrderCards.jsx:11 ~ start:", start);
  const handleDelete = () => {
    axios
      .delete(`/api/Orders/${id}`)
      .then(res => {
        const newOrders = Orders.filter(e => e._id !== order._id);
        setOrders(newOrders);
      })
      .catch(e => console.log(e));
  };

  const handleClaim = () => {
    order.claimed = true;
    order.employeeId = user._id;
    axios.put(`/api/Orders/${id}`, order).then(res => {
      const newOrders = Orders.filter(e => e._id !== order._id);
      setOrders(newOrders);
    });
  };

  const handleFinishedOrder = () => {
    order.delivered = true;
    axios.put(`/api/Orders/${id}`, order).then(res => {
      const newOrders = Orders.filter(e => e._id !== order._id);
      setOrders(newOrders);
    });
  };

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Link to={`/orders/${order._id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Order
          </h5>
        </Link>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Id: {order._id.slice(-5)}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* Last Update: {start - order.updatedAt} */}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Status:{" "}
          {order.delivered
            ? "Order ended"
            : order.claimed
            ? "Order claimed"
            : order.paid
            ? "Order to be claim"
            : "Waiting for Payment"}
        </p>
        <div>
          <button
            onClick={() => {
              navigate(`/orders/${order._id}`);
            }}
            type="submit"
            className="text-white bg-primary-100 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-[1rem]"
          >
            Details
          </button>
          {/* condition1 */}
          {order.claimed === false && user.userType === "employee" && (
            <button
              onClick={handleClaim}
              type="submit"
              className="text-white bg-primary-100 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-lg mr-2"
            >
              Claim
            </button>
          )}
          {/* condition2 */}
          {order.claimed === false && user.userType === "customer" && (
            <button
              onClick={handleDelete}
              type="submit"
              className="text-white bg-primary-100 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-lg mr-2"
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
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-lg"
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
      </div>
    </div>
  );
};

export default OrderCards;
