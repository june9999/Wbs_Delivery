import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import InputThing from "./InputThing";
import { AuthContext } from "../../context/Auth";

const RegisterForm = ({ user, handleChange, handleSubmit, setPopup }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState(context.errors);
  useEffect(() => {
    setErrors(context.errors);
  }, [context.errors]);

  return (
    <div className="absolute left-[50%] translate-x-[-50%] rounded-lg  translate-y-[20%] z-50 w-auto p-4  max-h-auto bg-primary-400 shadow ">
      <button
        onClick={() => setPopup(false)}
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
      </button>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900">Register</h3>
        <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
          <div className="relative gap-[1rem] flex flex-col py-[2rem]">
            <InputThing
              field="userName"
              user={user}
              errors={errors}
              handleChange={handleChange}
            />
            <InputThing
              field="email"
              user={user}
              errors={errors}
              handleChange={handleChange}
            />
            <InputThing
              field="password"
              user={user}
              errors={errors}
              type={"password"}
              className="-webkit-text-security: square;"
              handleChange={handleChange}
            />
            <InputThing
              field="confirmPassword"
              user={user}
              errors={errors}
              type={"password"}
              handleChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full text-black bg-primary-100 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
