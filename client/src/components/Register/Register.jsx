import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate } from "react-router-dom";
import NewProfile from "./NewProfile";
import RegisterForm from "./RegisterForm";
import "flowbite";

const Register = () => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [Popup, setPopup] = useState(false);
  const [formStage, setFormStage] = useState("register");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const resultA = await context.register(user);
      await setFormStage("profile");
      console.log(formStage);
    } catch (error) {
      console.log(error);
    }
    console.log(formStage);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* register Button */}
      <button
        className="block mx-3 text-primary-800 hover:text-primary-300 font-bold  text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          setPopup(!Popup);
        }}
      >
        Register
      </button>

      {/* <!-- Main modal --> */}
      {Popup && (
        <div className="absolute w-full max-w-md max-h-full right-20 z-10 ">
          <div className="relative rounded-lg shadow dark:bg-gray-700 bg-gradient-to-t from-primary-50 to-primary-100">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            {formStage === "register" && (
              <>
                <RegisterForm
                  user={user}
                  errors={context.errors}
                  handleChange={handleChange}
                  handleSubmit={handleRegister}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
