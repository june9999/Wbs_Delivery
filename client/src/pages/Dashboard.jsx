import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPage from "../components/Dashboard/AnimatedPage";
import Orders from "../components/Dashboard/Orders";
import Userprofile from "../components/Dashboard/UserProfile/Userprofile";
import NavbarSide from "../components/Dashboard/NavbarSide";
import Ordertoclaim from "../components/Dashboard/Ordertoclaim";
import NewOrder from "../components/Dashboard/CreateOrders/NewOrder";
import DashboardCom from "../components/Dashboard/DashboardCom";
import FormContact from "../components/Dashboard/Support/FormContact";

const Dashboard = () => {
  const [displayPage, setDisplayPage] = useState(5);
  return (
    <AnimatedPage>
      <section className="flex max-w-screen-xxl bg-gradient-to-t from-primary-50 to-primary-50">
        <div>
          <NavbarSide
            displayPage={displayPage}
            setDisplayPage={setDisplayPage}
          />
        </div>
        <div className="flex-col mx-auto pt-[2rem] bg-gradient-to-t from-primary-50 to-primary-50 p-10">
          <AnimatePresence>
            {displayPage === 5 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DashboardCom />
              </motion.div>
            )}
            {displayPage === 3 && (
              <motion.div
                key="ordertoclaim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Ordertoclaim />
              </motion.div>
            )}
            {displayPage === 0 && (
              <motion.div
                key="orders"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Orders />
              </motion.div>
            )}
            {displayPage === 1 && (
              <motion.div
                key="userprofile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Userprofile />
              </motion.div>
            )}
            {displayPage === 2 && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FormContact />
              </motion.div>
            )}
            {displayPage === 4 && (
              <motion.div
                key="neworder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NewOrder />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Dashboard;
