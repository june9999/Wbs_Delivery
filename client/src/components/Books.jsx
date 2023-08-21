import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosInstance';
const Orders = () => {
  const [Orders, setOrders] = useState(null); // Orders array from backend
  useEffect(() => {
    axios
      .get(`/api/Orders`)
      .then(res => setOrders(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {Orders &&
          Orders.map(order => (
            <li key={order._id}>
              <Link to={`/Orders/${order._id}`}>
                {order.title} by {order.author}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Orders;
