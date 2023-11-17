import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Menu = ({ showMenu }) => {
  const [Popup, setPopup] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    if (Popup === true) {
      setShowLoginForm(false);
    }
  }, [Popup]);

  useEffect(() => {
    if (showLoginForm === true) {
      setPopup(false);
    }
  }, [showLoginForm]);

  return (
    <div
      className={`${
        showMenu === true
          ? "flex flex-col justify-start  absolute left-[0] top-[100%] w-full"
          : "hidden"
      }  bg-white  md:flex-row md:static md:w-auto md:flex`}
    >
      <Login
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
        setPopup={setPopup}
      />
      <Register Popup={Popup} setPopup={setPopup} />
    </div>
  );
};

export default Menu;
