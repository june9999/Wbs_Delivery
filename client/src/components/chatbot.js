export const script = [
    {
      id: "BOT/intro",
      message: "How can we help?",
      trigger: "CHOICES/overview"
    },
    {
      id: "CHOICES/overview",
      options: [
        { label: "FAQs", trigger: "CHOICES/faq" },
        { label: "create an Order", trigger: "CHOICES/faq" },
        { label: "Request phone call", trigger: "call1" }

      ]
    },
    {
      id: "CHOICES/faq",
      options: [
        { label: "What areas in Berlin does RapidCats cover?", trigger: "a" },
        { label: "How does RapidCats ensure fast delivery?", trigger: "b" },
        { label: "Can I track my package with RapidCats?", trigger: "c" },
        { label: "How do I schedule a pickup with RapidCats?", trigger: "d" },
        { label: "Back to Overview?", trigger: "CHOICES/overview" },
      ]
    },
    {
      id: "call1",
      message: "enter phone number",
      trigger: "call2"
    },
    {
      id: "call2",
      user: true,
      trigger: "call3"
    },
    {
      id: "call3",
      message: "enter message",
      trigger: "call4"
    },
    {
      id: "call4",
      user: true,
      trigger: "call5"
    },
    {
      id: "call5",
      message: "Thank you! We will call you in the next few minutes.",
      trigger: "CHOICES/overview"
    },

    {
      id: "a",
      message: "RapidCats employs a fleet of highly trained bike couriers who navigate the city with agility and speed. We optimize our delivery routes to minimize travel time and ensure efficient service using the 'Google Maps Matrix API'.",
      trigger: "CHOICES/faq"
    },
    {
      id: "b",
      message: "RapidCats employs a fleet of highly trained bike couriers who navigate the city with agility and speed. We optimize our delivery routes to minimize travel time and ensure efficient service using the 'Google Maps Matrix API'.",
      trigger: "CHOICES/faq"
    },
    {
      id: "c",
      message: "RapidCats employs a fleet of highly trained bike couriers who navigate the city with agility and speed. We optimize our delivery routes to minimize travel time and ensure efficient service using the 'Google Maps Matrix API'.",
      trigger: "CHOICES/faq"
    },
    {
      id: "d",
      message: "RapidCats employs a fleet of highly trained bike couriers who navigate the city with agility and speed. We optimize our delivery routes to minimize travel time and ensure efficient service using the 'Google Maps Matrix API'.",
      trigger: "CHOICES/faq"
    },





  ];
  