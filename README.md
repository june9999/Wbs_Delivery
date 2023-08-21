# Delivery_App

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
