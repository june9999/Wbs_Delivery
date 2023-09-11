# RapidCats Express Delivery Web App

RapidCats - Your purrcel is our purriority!

RapidCats is a fictional bike express delivery service for package and document shipping within Berlin at cat-speed. Meow!

## About the project

This Single Page Application was created by Anusha, Wenjun and Jay as final project in the last three weeks of our Web Development Bootcamp at WBS coding school Berlin in September 2023.

## Main Features

### Cat-themed branding:

playful, cat-inspired website design with cat illustrations

### Google maps routes display and Uber price calculation:

delivery route and price are shown to customers during ordering process

### Online tracking and notifications:

real-time notifications about incoming orders for employees

### Interactive chat bot:

interactive Customer Support with FAQs and call-back request option

## Technologies used

React.js
Node.js
Express.js
Mongoose.js
MongoDB Atlas
Render.com

vite
react router dom
axios
uuidv4
dotenv
bcrypt
jwt

Flowbite components
Tailwind css
framer motion

React simple chatbot
React google maps
Google Maps Matrix Api
Socket.io

## Installation

git clone https://github.com/Anushamalligappa/Delivery_App.git

cd Delivery_App/client
npm i
touch .env
cd ..
cd server
npm i
touch .env

-> add your environment variables to the files /server/.env and /client/.env (see .env.example files)

# Start commands

cd server
npm run dev
cd ..
cd client
npm run dev

# Deployment

for deployment on render.com

- choose "create Web Service"
- add environment variables in "Environment"
- add deployment settings:
  Branch: dev
  Root Directory: server
  Build Command: npm i && cd ../client && npm i && npm run build
  Start Command: npm start

## Example API calls

GET
http://localhost:8000/auth/currentUser

POST
http://localhost:8000/auth/login

{
"email": "x@y.com",
"password": "12345678"
}

GET
http://localhost:8000/api/orders

POST
http://localhost:8000/api/orders

{
"pickupLocation": "Berliner Strasse 1",
"dropLocation": "Kölner Str. 3",
"weight": "2",
"height": "1",
"length": "2",
"width": "2",
"customerId": "64df5af74ceccfc86a9ab4cb",
"employeeId": "64df5af74ceccfc86a9ab4cb",
"price": "20.00",
"paid": "false"
}
