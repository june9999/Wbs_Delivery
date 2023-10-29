import React, { useState, useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import Logo from "../../assets/cute-cat-courier.png";
import Bell from "../Bell";
import Login from "../Login/Login";
import Register from "../Register/Register";
import cat1 from "../../assets/cat1.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="relative bg-white border-gray-200 dark:bg-gray-800 shadow-lg py-[1rem]">
        <div className="px-4 py-1 lg:px-6 flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl">
          <div className="flex items-center">
            <div className="text-primary-800 self-center text-xl font-bold whitespace-nowrap dark:text-white">
              <NavLink to="/">
                <img
                  src={cat1}
                  className=" h-6 sm:h-9"
                  alt="Cat Logo"
                  style={{ filter: "invert(0.3)" }}
                />
                <span className="ml-1 text-1xl">RapidCats</span>
              </NavLink>
            </div>
          </div>
          {/* Conditional rendering of Login/Logout */}
          {user ? (
            <div className="flex items-center lg:order-2">
              <button>
                <Bell />
              </button>
              <div className="text-primary-800 hover:text-primary-500 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800">
                <NavLink to="/dashboard">
                  <button>
                    Welcome <br />
                    {user.username}
                  </button>
                </NavLink>
              </div>

              <div className="text-gray-800 dark:text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 shadow-lg">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center lg:order-2">
              <Login />
              <Register />

              {/* hamburger menu */}
              <button
                data-collapse-toggle="mobile-menu2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 shadow-lg"
                aria-controls="mobile-menu2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
