import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Checkout from "./Checkout";
// import Confirmation from '../components/Confirmation'
import socket from "../../socket/socket";

import axios from "../axiosInstance";
import ProjMap from "../components/ProjMap";
import PayModal from "../components/PayModal";

const NewOrder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState("");
  console.log("pickupLocation", pickupLocation);
  const [dropLocation, setDropLocation] = useState("");
  // console.log("dropLocation",dropLocation)
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [checkout, setCheckout] = useState(true);
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(false);
  const [customerId, setCustomerId] = useState(user._id);

  // const [employeeId, setEmployeeId] = useState('');

  // const [claimed, setClaimed] = useState('false');
  // const [price, setPrice] = useState(0);
  // const [paid, setPaid] = useState('false');

  /*
            <h2>{order._id}</h2>
          <p> {order.pickupLocation}</p>
          <p> {order.dropLocation}</p>
          <p> {order.weight}</p>
          <p> {order.height}</p>
          <p> {order.lenght}</p>
          <p> {order.width}</p>
        --  <p>{order.customerId}</p>
        --  <p>{order.employeeId}</p>
          <p>{order.claimed}</p>
          <p>{order.price}</p>
          <p>{order.paid}</p>
        --  <p>{order.timestamps}</p>
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    // let defaultImage = ""
    // {image: image || defaultImage}

    axios
      .post(`/api/Orders`, {
        pickupLocation,
        dropLocation,
        weight,
        height,
        length,
        width,
        price,
        paid,
        customerId,
      })
      .then((res) => {
        console.log(res.data);
        socket.emit("message", res.data);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {checkout ? (
        <>
          <ProjMap
            price={price}
            setPrice={setPrice}
            distance={distance}
            setDistance={setDistance}
            pickupLocation={pickupLocation}
            setPickupLocation={setPickupLocation}
            dropLocation={dropLocation}
            setDropLocation={setDropLocation}
          />

          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Add Order
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  {/* <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="0"
                required
              />
            </div>  */}

                  <div className=" ">
                    <label
                      htmlFor="origin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Origin
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      value={pickupLocation}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="PickupLocation"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="destination"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Destination
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      value={dropLocation}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="DropLocation"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="item-weight"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Item Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="item-weight"
                      id="item-weight"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="12"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="item-height"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Item Height (cm)
                    </label>
                    <input
                      type="number"
                      name="item-height"
                      id="item-height"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="12"
                      required
                    />
                  </div>

                  {/* <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="12"
                  required
                />
              </div> */}
                  {/* <div>
                <label
                  htmlFor="item-height"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item Height (cm)
                </label>
                <input
                  type="number"
                  name="item-height"
                  id="item-height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="12"
                  required
                />
              </div> */}
                  <div>
                    <label
                      htmlFor="item-length"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Item Length (cm)
                    </label>
                    <input
                      type="number"
                      name="item-length"
                      id="item-length"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="12"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="item-width"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Item Width (cm)
                    </label>
                    <input
                      type="number"
                      name="item-width"
                      id="item-width"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="12"
                      required
                    />
                  </div>
                  {/* <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>  */}
                </div>
                {/* <div>
              <label
                htmlFor="item-width"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Width (cm)
              </label>
              <input
                type="number"
                name="item-width"
                id="item-width"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={width}
                onChange={(e) => setWidth(e.target.value)}

                placeholder="12"
                required
              />
            </div> */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                  <p className="mt-8 font-bold text-lg">
                    {" "}
                    Price for Delivery:{price}
                  </p>
                </div>

                <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Add product
                </button>

                {/* <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Add product
                </button> */}
              </form>
            </div>
          </section>
        </>
      ) : (
        <Checkout price={price} distance={distance} />
      )}

      <div className="flex items-center justify-center">
        {checkout && (
          <button
            onClick={() => setCheckout(false)}
            className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800  "
          >
            Checkout
          </button>
        )}
        {!checkout && (
          <button
            // onClick={payment}
            className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800  "
          >
            Payment
          </button>
        )}
      </div>

      {/* </section> */}
      {/* </> ) : (

    <Checkout price={price} distance={distance}/> 
    
    
   
    )} */}

      <div className="flex items-center justify-center mb-8">
        {checkout && (
          <button
            onClick={() => setCheckout(false)}
            className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800  "
          >
            Checkout
          </button>
        )}
        {!checkout && (
          <button className="ml-4 mr-4 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800  ">
            Payment
          </button>
        )}

        {!checkout && (
          <button
            onClick={
              (() => setPaid(true)) && <NavLink to="/Confirmation"></NavLink>
            }
            className="flex item-center justify-center inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800  "
          >
            Pay
          </button>
        )}
      </div>
    </>
  );
};

export default NewOrder;