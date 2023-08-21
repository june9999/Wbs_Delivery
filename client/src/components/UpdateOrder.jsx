import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosInstance';
const UpdateOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  useEffect(() => {
    axios
      .get(`/api/Orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/Orders/${id}`, order)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
    // const updatedOrder = {...order}
    // updatedOrder[name] = value
    // setState(updatedOrder)
  };
  return (
    <div>
      <h2>Update Order</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">pickupLocation</label>
        <input
          type="text"
          name="pickupLocation"
          value={order?.pickupLocation || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">dropLocation</label>
        <input
          type="text"
          name="dropLocation"
          value={order?.dropLocation || ''}
          onChange={handleChange}
          required
        />
            <label htmlFor="">Weight</label>
        <input
          type="number"
          name="weight"
          value={order?.weight || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Height</label>
        <input
          type="number"
          name="height"
          value={order?.height || ''}
          onChange={handleChange}
        />
    
        <label htmlFor="">Length</label>
        <input
          type="number"
          name="length"
          value={order?.length || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Width</label>
        <input
          type="number"
          name="width"
          value={order?.width || ''}
          onChange={handleChange}
        />
        <button>Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
