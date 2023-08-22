import { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate } from "react-router-dom";
import NewProfile from "./NewProfile";
import RegisterForm from "./RegisterForm";

function Register() {
  const context = useContext(AuthContext);
  const errors = context.errors;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    // company: '',
    firstName: "",
    lastName: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
    // image:''
  });

  const [formStage, setFormStage] = useState("register");
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
    await context.register(user);
    setFormStage("profile");
    setLoading(false);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await context.createProfile(user);
    // setUser({});
    setFormStage("registered");
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  if (formStage === "register") {
    return (
      <RegisterForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleRegister}
      />
    );
  }

  if (formStage === "profile") {
    return (
      <NewProfile
        user={user}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleProfileSubmit}
      />
    );
  }

  if (formStage === "registered") return <Navigate to="/" />;

  return null;
}

export default Register;
