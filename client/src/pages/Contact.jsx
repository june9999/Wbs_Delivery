import React from 'react';
import ChatbotStart from '../components/ChatbotStart';
import FormContact from '../components/blocks/FormContact';
import PayModal from '../components/PayModal';

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-primary-100/00 ">
      <FormContact />
      <div className="mt-72 ">
        <ChatbotStart />
      </div>
    </div>
  );
};

export default Contact;
