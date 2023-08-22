import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router-dom';

function NewProfile({ handleChange, handleSubmit, user }) {
  const context = useContext(AuthContext);
  const errors = context.errors;
  // pass the orginal user as prop to here (Register) -> add more attribute to it

  //   const [user, setUser] = useState({
  //     // // username: '',
  //     // // email: '',
  //     // // password: '',
  //     // // confirmPassword: '',
  //     // firstname:'',
  //     // lastname:'',
  //     // address:'',
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUser({ ...user, [name]: value });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     context.register(user);
  //   };

  //   if (!context.loading && context.user) {
  //     return <Navigate to="/" />;
  //   }

  //   if (!context.loading && !context.user) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <label htmlFor="">userType</label>
          {errors?.userType && (
            <p className="text-danger">{errors?.userType.message}</p>
          )}
          <input
            type="String"
            name="userType"
            value={user.userType}
            onChange={handleChange}
            required
          /> */}

      {/* <label htmlFor="">company</label>
                  {errors?.company && (
                    <p className="text-danger">{errors?.company.message}</p>
                  )}
                  <input
                    type="String"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    required
                  /> */}

      <label htmlFor="">firstName</label>
      {errors?.firstName && (
        <p className="text-danger">{errors?.firstName.message}</p>
      )}
      <input
        type="String"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="">lastName</label>
      {errors?.lastName && (
        <p className="text-danger">{errors?.lastName.message}</p>
      )}
      <input
        type="String"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="">address</label>
      {errors?.address && (
        <p className="text-danger">{errors?.address.message}</p>
      )}
      <input
        type="String"
        name="address"
        value={user.address}
        onChange={handleChange}
        required
      />

      {/*           
                    userType: {
                type: String,
                unique: true,
                required: [true, "userType is required"],
              },
              company: { type: String, default: null, unique: true },
              firstName: { type: String, required: [true, "firstname is required"] },
              lastName: { type: String, required: [true, "lastname is required"] },
              username: { type: String, required: [true, "username is Required!"] },
              address: { type: String, required: [true, "address is required"] },
              zipcode: { type: Number, required: [true, "zipcode is required"] },
              city: { type: String, required: [true, "city is required"] },
              phone: {
                type: Number,
                required: [true, "phone is required"],
                unique: true,
              },
              image: { type: String },
  
            */}

      <button>Create Profile</button>
    </form>
  );
  //   }
}

export default NewProfile;
