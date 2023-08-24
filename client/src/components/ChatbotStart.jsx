import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { script } from './chatbot';
import { chatbotStepifyScript } from './chatbotStepifyScript';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#ab927d',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#deab80',
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
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    <ThemeProvider theme={theme}>
      <ChatBot
        bubbleOptionStyle={{ backgroundColor: 'white', color: 'black' }}
        steps={chatbotStepifyScript(script)}
      />
    </ThemeProvider>
  </div>
);

export default ChatbotStart;
