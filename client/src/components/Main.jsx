// import Notfound from "../components/blocks/Notfound";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OrderDetails from "./Dashboard/Orders/OrderDetails";
import UpdateOrder from "./Dashboard/Orders/UpdateOrder";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import ProjMap from "./Dashboard/CreateOrders/ProjMap";
const Main = () => {
  const location = useLocation();

  return (
    <main className="relative  pb-[23rem]">
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/newOrder" element={<ProjMap />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/orders/:id/update" element={<UpdateOrder />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Main;
