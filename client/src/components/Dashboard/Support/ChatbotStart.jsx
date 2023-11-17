import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { script } from "./chatbot";
import { chatbotStepifyScript } from "./chatbotStepifyScript";

const theme = {
  fontFamily: "Roboto, sans-serif",
  background: "#C8B6A6",
  headerBgColor: "#C8B6A6",
  headerFontColor: "#195E5A",
  headerFontSize: "24px",
  botBubbleColor: "#F1DEC9",
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
  <div className="flex z-10 justify-between items-center mx-auto max-w-screen-xl ">
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Cat Bot"
        steps={chatbotStepifyScript(script)}
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
