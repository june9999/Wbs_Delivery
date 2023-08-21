import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import NewOrder from './NewOrder';
import OrderDetails from './OrderDetails';
import UpdateOrder from './UpdateOrder';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="" element={<Orders />} />
          <Route path="Orders/new" element={<NewOrder />} />
          <Route path="Orders/:id" element={<OrderDetails />} />
          <Route path="Orders/:id/update" element={<UpdateOrder />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default Main;
