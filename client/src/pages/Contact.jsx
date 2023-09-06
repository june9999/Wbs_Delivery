import React from 'react';
import ChatbotStart from '../components/ChatbotStart';
import FormContact from '../components/blocks/FormContact';
import PayModal from '../components/PayModal';
import Dashboard from './Dashboard';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-100/00">
      <FormContact />
      {/* <div className="mt-72 ">
      </div> */}
    </div>
  );
};

export default Contact;
