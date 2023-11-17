import React from "react";

const FormItem = ({ field, setOrder, order }) => {
  return (
    <div>
      <label
        htmlFor="item-weight"
        className="block mb-2 text-md capitalize font-medium text-gray-900"
      >
        {field}
      </label>
      <input
        type="number"
        name="item-weight"
        id="item-weight"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[10rem] p-2.5 "
        onChange={e => {
          setOrder({ ...order, [field]: e.target.value });
          console.log(order);
        }}
        placeholder=""
        required
      />
    </div>
  );
};

export default FormItem;
