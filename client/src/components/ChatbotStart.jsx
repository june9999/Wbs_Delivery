import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { script } from './chatbot';
import { chatbotStepifyScript } from './chatbotStepifyScript';
import botAvatar from '../assets/catbot.png';

// documentation: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/form
// all available props

const theme = {
  fontFamily: 'Roboto, sans-serif',
  background: '#F0FDFA',
  headerBgColor: '#99F6E4',
  headerFontColor: '#195E5A',
  headerFontSize: '24px',
  botBubbleColor: '#99F6E4',
  botFontColor: '#195E5A',
  userBubbleColor: '#99F6E4',
  userFontColor: '#195E5A',
};

const bubbleStyle = {
  fontSize: '18px',
};
const bubbleOptionStyle = {
  fontSize: '18px',
};
// const avatarStyle = {
//   height: '40px',
//   width: '30px',
// };

// const customStyles = {
//   height: '60px', // Adjust the height value as per your requirement
//   backgroundColor: 'red',
//   // Add more style properties as needed
// };


const ChatbotStart = () => (
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Cat Bot"
        // speechSynthesis={{ enable: true, lang: 'en' }}
        // bubbleOptionStyle={{ backgroundColor: 'white', color: 'black' }}
        steps={chatbotStepifyScript(script)}
        botAvatar={botAvatar}
        width="600px"
        height="600px"
        bubbleStyle={bubbleStyle}
        bubbleOptionStyle={bubbleOptionStyle}
        hideUserAvatar
      />
    </ThemeProvider>
  </div>
);

export default ChatbotStart;
