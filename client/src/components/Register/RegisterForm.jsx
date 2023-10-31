import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import InputThing from "./InputThing";
import { AuthContext } from "../../context/Auth";

const RegisterForm = ({ user, handleChange, handleSubmit }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState(context.errors);
  useEffect(() => {
    setErrors(context.errors);
  }, [context.errors]);

  return (
    <div className="px-6 py-6 lg:px-8">
      {/* // flowbite  */}
      <h3 className="mb-4 text-xl font-medium text-gray-900">Register</h3>

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
        <div className="flex items-start"></div>
        <button
          type="submit"
          className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
