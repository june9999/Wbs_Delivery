import LoginInput from "./LoginInput";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate, NavLink } from "react-router-dom";
const LoginForm = ({ setShowLoginForm }) => {
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
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-md max-h-full m-auto top-[15%] relative rounded-lg shadow bg-primary-200 ">
        <button
          onClick={e => {
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
          <h3 className="mb-4 text-xl font-medium text-gray-900 ">Log in</h3>
          <form
            className="space-y-6"
            action="/dashboard"
            onSubmit={handleSubmit}
          >
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

            {/* Remember me checkbox */}

            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm text-primary-600 hover:underline dark:text-primary-500">
                <NavLink to="/">Lost Password?</NavLink>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
            >
              Log in
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <div className="text-primary-600 hover:underline dark:text-primary-500">
                <NavLink to="/register">Create account</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
