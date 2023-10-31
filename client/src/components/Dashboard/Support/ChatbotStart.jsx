import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { script } from "./chatbot";
import { chatbotStepifyScript } from "./chatbotStepifyScript";
import botAvatar from "../../../assets/catbot.png";

const theme = {
  fontFamily: "Roboto, sans-serif",
  background: "#F0FDFA",
  headerBgColor: "#99F6E4",
  headerFontColor: "#195E5A",
  headerFontSize: "24px",
  botBubbleColor: "#99F6E4",
  botFontColor: "#195E5A",
  userBubbleColor: "#99F6E4",
  userFontColor: "#195E5A",
};

const bubbleStyle = {
  fontSize: "18px",
};
const bubbleOptionStyle = {
  fontSize: "18px",
};

const ChatbotStart = () => (
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Cat Bot"
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
