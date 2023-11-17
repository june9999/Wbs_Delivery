import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import Bell from "./Bell";
import cat1 from "../../assets/cat1.png";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user != null) {
      setUserName(user.userName);
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-800 shadow-lg py-[1rem]">
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
                  <button>{userName}</button>
                </NavLink>
              </div>

              <div className="text-gray-800 dark:text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 shadow-lg">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <HamburgerMenu />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
