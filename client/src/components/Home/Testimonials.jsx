import React, { useState } from "react";

const Testimonials = () => {
  const [showComment, setShowComment] = useState(1);
  return (
    <div className="flex flex-col  max-w-screen-xl  mx-auto  lg:pr-[5rem]  ">
      {/* quote container */}
      {showComment === 2 && (
        <article className="flex flex-col items-start text-start">
          <svg
            className="h-12  mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg tracking-wide leading-[2rem]">
            The real-time tracking feature is a game-changer. It provided me
            with real peace of mind, knowing exactly where my document was at
            every moment. The professionalism of their team and their commitment
            to customer service were truly impressive. I was even able to make
            special requests, and they accommodated them without a hitch.
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
      )}
      {showComment === 1 && (
        <article className="flex flex-col items-start text-start">
          <svg
            className="h-12 mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg tracking-wide leading-[2rem]">
            I needed an urgent document delivered to a client on the other side
            of the country, and I was worried about meeting the deadline.
            Thankfully, I chose RapidCats for their express courier service. Not
            only did they deliver the document on time, but the real-time
            tracking feature kept me updated throughout the entire process.
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
      )}
      <div className="flex gap-[5px] justify-center mt-[4rem]">
        <div
          onClick={() => {
            setShowComment(1);
          }}
          className={`${
            showComment === 1 ? "bg-white" : "bg-gray-400"
          } rounded-full    w-[1rem] h-[1rem]`}
        ></div>
        <div
          onClick={() => {
            setShowComment(2);
          }}
          className={`${
            showComment === 2 ? "bg-white" : "bg-gray-400"
          } rounded-full    w-[1rem] h-[1rem]`}
        ></div>
      </div>
    </div>
  );
};

export default Testimonials;
