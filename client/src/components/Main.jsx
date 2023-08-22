import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import NewOrder from './NewOrder';
import OrderDetails from './OrderDetails';
import UpdateOrder from './UpdateOrder';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<ProtectedRoute />}>
{/* // Pages: Contact(Chat) Checkout Rating  */}

      {/* Dashboard */}
          <Route path="dashboard/orders" element={<Orders />} />
          <Route path="orders/new" element={<NewOrder />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="orders/:id/update" element={<UpdateOrder />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default Main;
