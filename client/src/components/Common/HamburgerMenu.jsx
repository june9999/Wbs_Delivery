import { useState } from "react";

import Menu from "./Menu";
const HamburgerMenu = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => {
          setshowMenu(!showMenu);
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
      <Menu showMenu={showMenu} />
    </>
  );
};

export default HamburgerMenu;
