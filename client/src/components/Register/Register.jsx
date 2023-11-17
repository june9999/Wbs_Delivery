import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import RegisterForm from "./RegisterForm";
import "flowbite";

const Register = ({ Popup, setPopup }) => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  console.log("pop" + Popup);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await context.register(user);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <button
        className="block mx-3 text-primary-800 hover:text-primary-300 font-bold  text-xl px-5 py-2.5 text-center "
        onClick={() => {
          setPopup(!Popup);
        }}
      >
        Register
      </button>
      {Popup && (
        <RegisterForm
          user={user}
          errors={context.errors}
          handleChange={handleChange}
          handleSubmit={handleRegister}
          setPopup={setPopup}
        />
      )}
    </div>
  );
};

export default Register;
