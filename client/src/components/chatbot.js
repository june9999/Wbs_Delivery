export const script = [
  {
    id: 'BOT/intro',
    message:
      'Please read the frequently asked questions before requesting a call.',
    trigger: 'CHOICES/faq',
  },
  {
    id: 'CHOICES/faq',
    options: [
      { label: 'How do I schedule a pickup with RapidCats?', trigger: 'a' },
      { label: 'How does RapidCats ensure fast delivery?', trigger: 'b' },
      { label: 'Can I track my package with RapidCats?', trigger: 'c' },
      {
        label: "What happens if I'm not available to receive my delivery?",
        trigger: 'd',
      },
      { label: 'Request phone call', trigger: 'call1' },
    ],
  },
  {
    id: 'a',
    message:
      'Create an account and schedule a pickup by providing the necessary details about your package. Our cat couriers will be dispatched to collect your package asap',
    trigger: 'CHOICES/faq',
  },
  {
    id: 'b',
    message:
      "RapidCats employs a fleet of highly trained bike couriers who navigate the city with agility and speed. We optimize our delivery routes to minimize travel time and ensure efficient service using the 'Google Maps Matrix API'.",
    trigger: 'CHOICES/faq',
  },
  {
    id: 'c',
    message:
      'Once your package is picked up, you will receive a unique tracking number. Visit our website or use our mobile app to enter the tracking number and get real-time updates on the status and location of your package.',
    trigger: 'CHOICES/faq',
  },
  {
    id: 'd',
    message:
      'Our cat couriers will make multiple delivery attempts. You can reschedule the delivery or provide alternative instructions such as leaving the package with a neighbor or in a secure location.',
    trigger: 'CHOICES/faq',
  },
  {
    id: 'call1',
    message: 'enter phone number',
    trigger: 'call2',
  },
  {
    id: 'call2',
    user: true,
    trigger: 'call3',
  },
  {
    id: 'call3',
    message: 'enter message',
    trigger: 'call4',
  },
  {
    id: 'call4',
    user: true,
    trigger: 'call5',
  },
  {
    id: 'call5',
    message: 'Thank you! We will call you in the next few minutes.',
    trigger: 'CHOICES/faq',
  },
];
