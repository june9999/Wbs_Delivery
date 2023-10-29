import React from "react";

const InputThing = ({ user, errors, handleChange, field, type }) => {
  return (
    <div>
      <label className="capitalize" htmlFor="">
        {field.toLowerCase()}
      </label>
      {errors?.errors[field] && (
        <p className="text-danger bg-black-900 absolute">
          {errors?.errors[field].message}
        </p>
      )}
      <input
        className="appearance-none"
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
