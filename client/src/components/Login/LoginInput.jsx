const LoginInput = ({ field, handleChange, placeholder, user }) => {
  return (
    <div>
      <label
        className="capitalize block mb-2 text-sm font-medium text-gray-900"
        htmlFor={field}
      >
        {field.toLowerCase()}
      </label>
      <input
        type={field}
        name={field}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        value={user.field}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default LoginInput;
