import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
const HamburgerMenu = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
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
      </button>
      <div
        className={`${
          showLogin === true
            ? "flex flex-col justify-start  absolute left-[0] top-[100%] w-full"
            : "hidden"
        }  bg-white  md:flex-row md:static md:w-auto md:flex`}
      >
        <Login />
        <Register />
      </div>
    </>
  );
};

export default HamburgerMenu;
