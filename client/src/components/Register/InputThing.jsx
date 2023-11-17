const InputThing = ({ user, errors, handleChange, field, type }) => {
  return (
    <div className="flex gap-[2rem] justify-between">
      <label
        className=" capitalize block mb-2 text-sm font-medium text-gray-900"
        htmlFor={field}
      >
        {field.toLowerCase()}
      </label>
      <div className="absolute bottom-0">
        {errors?.errors[field] && (
          <p className="text-danger bg-black-900 block">
            {errors?.errors[field].message}
          </p>
        )}
      </div>
      <input
        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[12rem] py-1.5  dark:bg-gray-600 "
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
