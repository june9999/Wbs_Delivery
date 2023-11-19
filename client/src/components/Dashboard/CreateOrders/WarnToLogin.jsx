import React from "react";

const WarnToLogin = () => {
  return (
    <>
      <form
        className="absolute py-[3rem] absolute left-[50%] translate-x-[-50%] rounded-lg  z-50 w-auto p-4  max-h-auto bg-primary-400 shadow space-y-6"
        action="/dashboard"
      >
        <div className="flex gap-[5rem] justify-between">
          <div className="flex items-start">
            <h1>In order to place an order, please login in first!</h1>
          </div>
          <div className="text-sm text-primary-600 hover:underline dark:text-primary-500"></div>
        </div>
        <button className="w-full text-black bg-primary-100 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800 shadow-lg">
          Log in Now.
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Don't have an account?
          <div className="text-primary-600 hover:underline dark:text-primary-500">
            Sign up
          </div>
        </div>
      </form>
    </>
  );
};

export default WarnToLogin;
