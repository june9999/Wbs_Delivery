import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate } from "react-router-dom";
import NewProfile from "./NewProfile";

function Register() {
  const context = useContext(AuthContext);
  const errors = context.errors;
  const [showNewProfileForm, setShowNewProfileForm] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    context.register(user);
    setShowNewProfileForm(true);
  };

  // redirect to the homepage only if the user is authenticated
  if (!context.loading && context.user) {
    return <Navigate to="/" />;
  }

  // useEffect(() => {
  // }, [showNewProfileForm]);

  // only render the registration form when the user is not authenticated
  if (!context.loading && !context.user) {
    return (
      <>
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
          {errors?.email && (
            <p className="text-danger">{errors?.email.message}</p>
          )}
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
      </>
    );
  }

  // if (!context.loading && context.user) {
  if (showNewProfileForm) {
    return (
      <>
        <p> new profile page loaded</p>
        <NewProfile
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          user={user}
        />
      </>
    );
  }
}

export default Register;
