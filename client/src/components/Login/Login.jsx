import { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate } from "react-router-dom";
import "flowbite";
import LoginForm from "./LoginForm";

const Login = ({ showLoginForm, setShowLoginForm, setPopup }) => {
  const context = useContext(AuthContext);

  if (!context.loading && context.user) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <button
        onClick={() => {
          setShowLoginForm(!showLoginForm);
        }}
        className="block mx-3 text-primary-800 hover:text-primary-300 font-bold text-start  text-xl px-5 py-2.5 bg-primary-400 "
      >
        Login
      </button>
      {showLoginForm && (
        <LoginForm setShowLoginForm={setShowLoginForm} setPopup={setPopup} />
      )}
    </>
  );
};

export default Login;
