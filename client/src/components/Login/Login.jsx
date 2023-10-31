import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate, NavLink } from "react-router-dom";
import "flowbite";
import LoginForm from "./LoginForm";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const context = useContext(AuthContext);

  if (!context.loading && context.user) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <button
        onClick={() => {
          setShowLoginForm(true);
        }}
        className="block mx-3 text-primary-800 hover:text-primary-300 font-bold text-start  text-xl px-5 py-2.5  "
      >
        Login
      </button>
      {showLoginForm && <LoginForm setShowLoginForm={setShowLoginForm} />}
    </>
  );
  // }
};

export default Login;
