// import Notfound from "../components/blocks/Notfound";
import Comments from "../pages/Comments";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./AnimatedPage";
import ProjMap from "./ProjMap";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NewOrder from "../pages/NewOrder";
import OrderDetails from "../pages/OrderDetails";
import UpdateOrder from "../pages/UpdateOrder";
import LoginForm from "../pages/LoginForm";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Dashboard from "../pages/Dashboard";
import Payment from "../pages/Payment";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Confirmation from "../components/Confirmation";

const Main = () => {
  const location = useLocation();

  return (
    <main>
      <AnimatedPage>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              {/* // Pages:  Checkout Rating  */}

              {/* Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Order */}
              <Route path="/orders/new" element={<NewOrder />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/orders/:id/comments" element={<Comments />} />
              <Route path="/orders/:id/update" element={<UpdateOrder />} />

              {/* Payment */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/comments" element={<Comments />} />

              <Route path="/confirmation" element={<Confirmation />} />
            </Route>

            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </AnimatedPage>
    </main>
  );
};

export default Main;
