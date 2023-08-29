import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router-dom';
import NewProfile from './NewProfile';
import RegisterForm from './RegisterForm';

function Register() {
  const context = useContext(AuthContext);
  const errors = context.errors;

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // userType: '',
    // company: '',
    firstName: '',
    lastName: '',
    address: '',
    zipcode: '',
    city: '',
    phone: '',
    image: '',
  });

  const [formStage, setFormStage] = useState('register');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    // await context.register(user);
    setFormStage('profile');
    setLoading(false);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Update the user state with profile information
    const updatedUser = {
      ...user,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      zipcode: user.zipcode,
      city: user.city,
      phone: user.phone,
      image: user.image,
    };

    await context.register(updatedUser);
    setFormStage('registered');
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  if (formStage === 'register') {
    return (
      <RegisterForm
        user={user}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleRegister}
      />
    );
  }

  if (formStage === 'profile') {
    user && console.log(user);

    return (
      <NewProfile
        user={user}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleProfileSubmit}
      />
    );
  }

  if (formStage === 'registered') return <Navigate to="/dashboard" />;

  return null;
}

export default Register;


/*
<form className="form" onSubmit={handleSubmit}>
      <label htmlFor="">Username:</label>
      {errors?.username && (
        <p className="text-danger">{errors?.username.message}</p>
      )}
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="">Email:</label>
      {errors?.email && <p className="text-danger">{errors?.email.message}</p>}
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="">Password:</label>
      {errors?.password && (
        <p className="text-danger">{errors?.password.message}</p>
      )}
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="">Confirm Password:</label>
      {errors?.confirmPassword && (
        <p className="text-danger">{errors?.confirmPassword.message}</p>
      )}
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange}
        required
      />

      <button>Register</button>
    </form>


*/
