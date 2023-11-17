import LoginInput from "./LoginInput";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate, NavLink } from "react-router-dom";
const LoginForm = ({ setShowLoginForm, setPopup }) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await context.login(user);
    <Navigate to="/dashboard" />;
  };

  return (
    <div className=" absolute left-[50%] translate-x-[-50%] rounded-lg  translate-y-[30%] z-50 w-auto p-4  max-h-auto bg-primary-400 shadow ">
      <button
        onClick={() => {
          setShowLoginForm(false);
        }}
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
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
      <div className="px-6 py-6 lg:px-8 ">
        <h3 className="mb-4 text-2xl font-medium text-gray-900 ">Log in</h3>
        <form className="space-y-6" action="/dashboard" onSubmit={handleSubmit}>
          <LoginInput
            field="email"
            user={user}
            handleChange={handleChange}
            placeholder="Your email"
          />
          <LoginInput
            field="password"
            user={user}
            handleChange={handleChange}
            placeholder="••••••••"
          />

          <div className="flex gap-[5rem] justify-between">
            <div className="flex items-start">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm text-primary-600 hover:underline dark:text-primary-500">
              <NavLink to="/">Forgot Password?</NavLink>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-black bg-primary-100 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800 shadow-lg"
          >
            Log in
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Don't have an account?{" "}
            <div
              onClick={() => {
                setPopup(true);
              }}
              className="text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </div>
          </div>
          <div>
            {context.errors &&
              "Please check if the Email or Password is current."}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
