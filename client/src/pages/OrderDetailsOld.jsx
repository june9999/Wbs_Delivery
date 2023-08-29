import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null); // order object from backend

  useEffect(() => {
    axios
      .get(`/api/Orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);

  const handleDelete = () => {
    axios
      .delete(`/api/Orders/${id}`)
      .then((res) => navigate('/'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {order && (
        <>
          <h2>{order._id}</h2>
          <p> {order.pickupLocation}</p>
          <p> {order.dropLocation}</p>
          {/* <p> {order.weight}</p>
          <p> {order.height}</p>
          <p> {order.length}</p>
          <p> {order.width}</p>
          <p>{order.customerId}</p>
          <p>{order.employeeId}</p>
          <p>{order.claimed}</p>
          <p>{order.price}</p>
          <p>{order.paid}</p>
          <p>{order.timestamps}</p> */}
          <Link to={`/orders/${id}/update`}>Update Order</Link>
          <button onClick={handleDelete}>Delete Order</button>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
