import React from "react";
import CatInBox from "../../../assets/cat-in-box.png";
import ChatbotStart from "./ChatbotStart";

const FormContact = () => {
  return (
    <section className=" bg-primary-50/0 dark:bg-gray-900 ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Support
      </h2>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="flex justify-content mb-10">
          <ChatbotStart />
        </div>
        <br />
        <img
          className="mx-auto w-60 h-70 rounded-lg"
          src={CatInBox}
          alt="cat in bike basket"
        />
        <br />
      </div>
    </section>
  );
};

export default FormContact;
