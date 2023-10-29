import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col rounded-lg max-w-screen-xl mx-[10rem] py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg items-center">
      {/* quote container */}
      <div className="flex">
        <article className=" hidden">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-medium text-gray-500 dark:text-white">
            "I needed an urgent document delivered to a client on the other side
            of the country, and I was worried about meeting the deadline.
            Thankfully, I chose RapidCats for their express courier service. Not
            only did they deliver the document on time, but the real-time
            tracking feature kept me updated throughout the entire process. "
          </p>

          <div className="flex items-center justify-center mt-6 space-x-3 ">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://i.pinimg.com/736x/5c/4e/28/5c4e28c8993be95ae616aaf6fb774cda.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Meow.com
              </div>
            </div>
          </div>
        </article>
        <article>
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-medium text-gray-500 dark:text-white">
            "I needed an urgent document delivered to a client on the other side
            of the country, and I was worried about meeting the deadline.
            Thankfully, I chose RapidCats for their express courier service. Not
            only did they deliver the document on time, but the real-time
            tracking feature kept me updated throughout the entire process. "
          </p>

          <div className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://i.pinimg.com/736x/5c/4e/28/5c4e28c8993be95ae616aaf6fb774cda.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Meow.com
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Testimonials;
