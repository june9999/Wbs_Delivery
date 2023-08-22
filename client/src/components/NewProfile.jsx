import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';

function NewProfile({ user, handleChange, handleProfileSubmit }) {
  // pass the orginal user as prop to here (Register) -> add more attribute to it
  const context = useContext(AuthContext);
  const errors = context.errors;

  return (
    <form className="form" onSubmit={handleProfileSubmit}>
      {/*  <form className="form" onSubmit={handleSubmit}> */}
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

<label htmlFor="">zipcode</label>
      {errors?.zipcode && (
        <p className="text-danger">{errors?.zipcode.message}</p>
      )}
      <input
        type="Number"
        name="zipcode"
        value={user.zipcode}
        onChange={handleChange}
        required
      />

<label htmlFor="">city</label>
      {errors?.address && (
        <p className="text-danger">{errors?.city.message}</p>
      )}
      <input
        type="String"
        name="city"
        value={user.city}
        onChange={handleChange}
        required
      />

<label htmlFor="">phone</label>
      {errors?.phone && (
        <p className="text-danger">{errors?.phone.message}</p>
      )}
      <input
        type="String"
        name="phone"
        value={user.phone}
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
}

export default NewProfile;
