import React from 'react';
import ChatbotStart from '../components/ChatBotStart';
import FormContact from '../components/blocks/FormContact';

const Contact = () => {
  return (
    <>
      <FormContact />
      <div className="" style={{ position: 'absolute', top: 600, right: 0 }}>
        <ChatbotStart />
      </div>{' '}
    </>
  );
};

export default Contact;
