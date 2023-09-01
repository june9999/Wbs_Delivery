import React from 'react';
import ChatbotStart from '../components/ChatbotStart';
import FormContact from '../components/blocks/FormContact';
import CatInBox from '../assets/cat-in-box.png';

const Contact = () => {
  return (
    <>
      <img
        className="mx-auto mt-10 w-60 h-70 rounded-lg"
        src={CatInBox}
        alt="cat in bike basket"
      />
      <FormContact />
      <div className="" style={{ position: 'absolute', top: 600, right: 0 }}>
        <ChatbotStart />
      </div>
    </>
  );
};

export default Contact;
