import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

import axios from '../axiosInstance';
import Map from '../components/ProjMap';

const NewOrder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

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
        customerId,
        
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };
  return (
    // <div>
    //   <h2>Add Order</h2>
    //   <form onSubmit={handleSubmit}>
    //     {/* <label htmlFor="">Title</label>
    //     <input
    //       type="text"
    //       name="title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       required
    //     /> */}
    //     <label htmlFor="">pickupLocation</label>
    //     <input
    //       type="text"
    //       name="pickupLocation"
    //       value={pickupLocation}
    //       onChange={(e) => setPickupLocation(e.target.value)}
    //     />

    //     <label htmlFor="">dropLocation</label>
    //     <input
    //       type="text"
    //       name="dropLocation"
    //       value={dropLocation}
    //       onChange={(e) => setDropLocation(e.target.value)}
    //     />
    //     <label htmlFor="">weight</label>
    //     <input
    //       type="number"
    //       name="weight"
    //       value={weight}
    //       onChange={(e) => setWeight(e.target.value)}
    //     />
    //     <label htmlFor="">height</label>
    //     <input
    //       type="number"
    //       name="height"
    //       value={height}
    //       onChange={(e) => setHeight(e.target.value)}
    //     />
    //     <label htmlFor="">length</label>
    //     <input
    //       type="number"
    //       name="length"
    //       value={length}
    //       onChange={(e) => setLength(e.target.value)}
    //     />
    //     <label htmlFor="">width</label>
    //     <input
    //       type="number"
    //       name="width"
    //       value={width}
    //       onChange={(e) => setWidth(e.target.value)}
    //     />

    //     <button>Add Order</button>
    //   </form>
    // </div>


    <>

<Map />


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
                placeholder="$2999"
                required
              />
            </div> */}
            
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
                Item Height (kg)
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
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
    </>


  );
};

export default NewOrder;
