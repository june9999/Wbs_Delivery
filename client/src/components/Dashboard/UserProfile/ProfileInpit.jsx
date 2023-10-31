import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth";

const ProfileInpit = ({ field, className, type }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={`${className}`}>
      <label
        htmlFor={field}
        className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {field.toLowerCase()}
      </label>
      <input
        // value={user[field]}
        type="text"
        name={field}
        id={field}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required
        placeholder={user[field]}
      />
    </div>
  );
};

export default ProfileInpit;
