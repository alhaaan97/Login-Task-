# Login-Task-
This is the Login task:
Commands:
Start Server: npm start,
install node_modules: npm i
Steps: 
1:Create a user (Signup)
2:Log the user in (login)
3:If password forget then hit forget password api, an email will be sent to your account.
    3.1: Create app password in gmail for sending emails through nodemailer.
    3.2: Replace the values in .env file for the following keys : EMAIL_USER and EMAIL_PASS with your email address and app password.


BCrypt: Used for hashing and salting
Express.Router used for routing.
MongoDB -> Mongoose ORM: Used as DB
Nodemailer used for Sending emails.

Node version 18.14.0

URLs: 
Urls for Apis to be hit:
http://localhost:3000/api/auth/login
http://localhost:3000/api/auth/signup
http://localhost:3000/api/auth/forgot-password
http://localhost:3000/api/auth/reset-password/nqgln8ois9
