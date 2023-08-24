// Script for ChatbotStart
const chatbotStepifyScript = (script) =>
  script.map((step) => {
    if (step.options) {
      return {
        ...step,
        options: step.options.map((option, idx) => ({
          ...option,
          value: idx,
        })),
      };
    } else {
      return step;
    }
  });

export { chatbotStepifyScript };
