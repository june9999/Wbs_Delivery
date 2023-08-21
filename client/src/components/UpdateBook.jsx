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
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={order?.title || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          name="author"
          value={order?.author || ''}
          onChange={handleChange}
        />
        <label htmlFor="">Year</label>
        <input
          type="text"
          name="year"
          value={order?.year || ''}
          onChange={handleChange}
        />
        <button>Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
