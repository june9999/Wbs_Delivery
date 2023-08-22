import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

import axios from '../axiosInstance';

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

  const [claimed, setClaimed] = useState('false');
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState('false');

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
        claimed,
        price,
        paid,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /> */}
        <label htmlFor="">pickupLocation</label>
        <input
          type="text"
          name="pickupLocation"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />

        <label htmlFor="">dropLocation</label>
        <input
          type="text"
          name="dropLocation"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
        />
        <label htmlFor="">weight</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="">height</label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor="">length</label>
        <input
          type="number"
          name="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="">width</label>
        <input
          type="number"
          name="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />

        <button>Add Order</button>
      </form>
    </div>
  );
};

export default NewOrder;
