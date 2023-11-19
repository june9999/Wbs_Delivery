import React from "react";

const FormItem = ({ field, setOrder, order, unit }) => {
  return (
    <div>
      <label
        htmlFor={field}
        className="block mb-2 text-md capitalize font-medium text-gray-900"
      >
        {`${field} (${unit})`}
      </label>
      <input
        type="number"
        name={field}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[10rem] p-2.5 "
        onChange={e => {
          setOrder({ ...order, [field]: e.target.value });
        }}
        placeholder=""
        required
      />
    </div>
  );
};

export default FormItem;
