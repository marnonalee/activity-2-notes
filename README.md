# Activity 2: Notes API + UI

## Project Overview
This is a personal Notes Web Application where users can register, log in, and manage their own private notes. Users can create, view, edit, and delete notes securely.

## Features
- User Registration and Login (JWT Authentication)
- Create, View, Update, and Delete Notes
- Private access: Each user sees only their own notes
- Simple and modern UI built with ReactJS
- Backend API built with NestJS and MySQL

## How to Run

### Backend
1. Navigate to the backend folder `cd backend`
2. Run `npm install`
3. Configure `.env` with database credentials
4. Start server: `npm run start:dev`
5. API available at `http://localhost:3000`

### Frontend
1. Navigate to the backend folder `cd frontend`
2. Run `npm install`
3. Start frontend: `npm start`
**Note:** If you see a message like “Would you like to run the app on another port instead?”, just type `y` or `yes` to continue.
4. Open `http://localhost:3000` in your browser

## API Documentation
- Swagger: `http://localhost:3000/api/docs`
- Postman: Import Postman collection to test endpoints

## Technologies Used
- ReactJS
- NestJS
- MySQL
- JWT for authentication
- Swagger & Postman for API testing

