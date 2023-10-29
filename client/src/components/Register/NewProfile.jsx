import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { NavLink } from "react-router-dom";
import InputThing from "./InputThing";

function NewProfile({ user, errors, handleChange, handleProfileSubmit }) {
  return (
    <section className="dark:bg-gray-900 rounded-lg">
      <div className="flex flex-col items-center justify-center mx-auto lg:py-0 ">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-t from-primary-50 to-primary-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8  mx-16">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Profile
            </h1>
            <form
              className="space-y-4 md:space-y-6 text-right"
              onSubmit={handleProfileSubmit}
            >
              <div className="flex flex-col gap-4">
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="firstName"
                />
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="lastName"
                />
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="address"
                />
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="zipcode"
                />
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="city"
                />
                <InputThing
                  user={user}
                  errors={errors}
                  handleChange={handleChange}
                  field="phone"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
              </p>
              <div className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                <NavLink to="/login"></NavLink>
                Login
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProfile;
