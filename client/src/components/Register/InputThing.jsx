import React from "react";

const InputThing = ({ user, errors, handleChange, field, type }) => {
  return (
    <div>
      <label
        className=" capitalize block mb-2 text-sm font-medium text-gray-900"
        htmlFor={field}
      >
        {field.toLowerCase()}
      </label>
      {errors?.errors[field] && (
        <p className="text-danger bg-black-900 block">
          {errors?.errors[field].message}
        </p>
      )}
      <input
        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5  dark:bg-gray-600 "
        type={type || "String"}
        name={field}
        value={user.field}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputThing;
