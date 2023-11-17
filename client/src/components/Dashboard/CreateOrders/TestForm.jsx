import { Autocomplete } from "@react-google-maps/api";
import FormItem from "./FormItem";
import { useState } from "react";

const TestForm = ({
  originRef,
  destinationRef,
  calculateRoute,
  setOrder,
  order,
}) => {
  return (
    <form className="m-32 flex gap-4 w-full  ">
      <div>
        <div className="flex gap-[1rem] justify-between">
          <Autocomplete>
            <div className="w-80">
              <label
                htmlFor="origin"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white mt-4"
              >
                From
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="PickupLocation"
                ref={originRef}
              />
            </div>
          </Autocomplete>
          <Autocomplete>
            <div className="w-80">
              <label
                htmlFor="destination"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white mt-4"
              >
                To
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                placeholder="DropLocation"
                ref={destinationRef}
              />
            </div>
          </Autocomplete>
        </div>
        <div className="flex gap-[1rem]">
          <FormItem field="weight" setOrder={setOrder} order={order} />
          <FormItem field="length" setOrder={setOrder} order={order} />
          <FormItem field="width" setOrder={setOrder} order={order} />
          <FormItem field="height" setOrder={setOrder} order={order} />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-10 text-md font-medium text-center text-black bg-primary-100 rounded-lg focus:ring-4 focus:ring-primary-300 shadow-lg"
        onClick={calculateRoute}
      >
        Try it out
      </button>
    </form>
  );
};

export default TestForm;
