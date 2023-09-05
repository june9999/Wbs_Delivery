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
  background: '#f9f8fb',
  fontFamily: 'Roboto, sans-serif',
  headerBgColor: '#115e59',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#115e59',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// const Main = styled.div`
//   font-family: sans-serif;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const ChatbotStart = () => (
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Cat Bot"
        // speechSynthesis={{ enable: true, lang: 'en' }}
        // bubbleOptionStyle={{ backgroundColor: 'white', color: 'black' }}
        steps={chatbotStepifyScript(script)}
        botAvatar={botAvatar}
      />
    </ThemeProvider>
  </div>
);

export default ChatbotStart;
