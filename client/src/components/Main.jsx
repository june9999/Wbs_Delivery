// import Notfound from "../components/blocks/Notfound";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPage from "./Dashboard/AnimatedPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NewOrder from "./Dashboard/CreateOrders/NewOrder";
import OrderDetails from "../pages/OrderDetails";
import UpdateOrder from "../pages/UpdateOrder";
import LoginForm from "../components/Login/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import { BiLogIn } from "react-icons/bi";
// import Payment from '../pages/Payment';
// import Checkout from '../pages/Checkout';
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
const Main = () => {
  const location = useLocation();

  return (
    <main className="relative  pb-[23rem]">
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/orders/new" element={<NewOrder />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Order */}
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/orders/:id/update" element={<UpdateOrder />} />
        </Route>

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Main;
