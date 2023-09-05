import React from 'react';
import ChatbotStart from '../components/ChatbotStart';
import FormContact from '../components/blocks/FormContact';
import CatInBox from '../assets/cat-in-box.png';
import PayModal from '../components/PayModal';

const Contact = () => {
  return (
    <div className=' bg-primary-100'>
      <img
        className="mx-auto pt-10 w-60 h-70 rounded-lg "
        src={CatInBox}
        alt="cat in bike basket"
      />
      <FormContact />
      <div className="" style={{ position: 'absolute', top: 600, right: 0 }}>
        <ChatbotStart />
      </div>
    </div>
  );
};

export default Contact;
