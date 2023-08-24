import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NewOrder from '../pages/NewOrder';
import OrderDetails from '../pages/OrderDetails';
import UpdateOrder from '../pages/UpdateOrder';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Payment from '../pages/Payment';
import Checkout from '../pages/Checkout';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from './AnimatedPage';

const Main = () => {
  const location = useLocation();
  return (
    <main>
      <AnimatedPage>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<ProtectedRoute />}>
              {/* // Pages:  Checkout Rating  */}

              {/* Dashboard */}
              <Route path="dashboard" element={<Dashboard />} />

              {/* Order */}
              <Route path="/orders/new" element={<NewOrder />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/orders/:id/update" element={<UpdateOrder />} />

              {/* Payment */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      </AnimatedPage>
    </main>
  );
};

export default Main;
