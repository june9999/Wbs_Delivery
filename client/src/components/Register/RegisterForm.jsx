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
    <section className="bg-gray-50 dark:bg-gray-900 rounded-lg">
      {/* // flowbite  */}
      <div className="flex flex-col items-center justify-center mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-70">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg bg-gradient-to-t from-primary-50 to-primary-100 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>

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
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
