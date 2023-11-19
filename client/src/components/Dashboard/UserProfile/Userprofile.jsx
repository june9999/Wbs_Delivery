import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth";
import axios from "../../../axiosInstance";
import ProfileInpit from "./ProfileInpit";

const Userprofile = () => {
  // Where user could change information in user dashboard
  const { user } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(user);

  const handlerUpdate = e => {
    e.preventDefault();
    console.log(
      "🚀 ~ file: Userprofile.jsx:12 ~ handlerUpdate ~ userProfile:",
      userProfile,
    );
    axios
      .put(`/auth/${user._id}`, userProfile)
      .then(res => res)
      .catch(e => e.response?.data?.message);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
    console.log(
      "🚀 ~ file: Userprofile.jsx:21 ~ handleChange ~ userProfile:",
      userProfile,
    );
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/auth/currentUser");
      setUserProfile(res.data.user);
    };
    getUser();
  }, []);

  return (
    <>
      <section className="bg-primary-50/00 dark:bg-gray-900">
        <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Profile
        </h2>
        <div className="max-w-2xl  py-8 mx-auto lg:py-16">
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <ProfileInpit
                userProfile={userProfile}
                field="userName"
                className="sm:col-span-2"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="email"
                className="sm:col-span-2"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="firstName"
                className="w-full"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="lastName"
                className="w-full"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="address"
                className="w-full"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="city"
                className="w-full"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="phone"
                className="w-full"
                handleChange={handleChange}
              />
              <ProfileInpit
                userProfile={userProfile}
                field="zipcode"
                className="w-full"
                handleChange={handleChange}
              />
            </div>
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={handlerUpdate}
                className="text-black bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  shadow-lg"
              >
                Update Profile
              </button>
              <button className="text-red-500 inline-flex items-center hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg">
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Userprofile;
