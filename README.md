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
1. Navigate to the backend folder: `cd backend`
2. Run `npm install`
3. Configure `.env` with database credentials
4. Start server (e.g., via XAMPP/Laravel/other setup)
5. Start server: `npm run start`
6. API available at `http://localhost:4000`

### Frontend
1. Navigate to the frontend folder: `cd frontend`
2. Run `npm install`
3. Start frontend: `npm run start`  
**Note:** If prompted to run on another port, type `y` or `yes`
4. Open `http://localhost:3000` in your browser

## API Documentation
- Swagger: `http://localhost:3000/api`
- Postman: Import Postman collection to test endpoints

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | /auth/register | Register a new user |
| POST   | /auth/login    | Login as existing user |
| GET    | /notes         | Get all notes of the logged-in user |
| POST   | /notes         | Add a new note |
| PUT    | /notes/{id}    | Update an existing note |
| DELETE | /notes/{id}    | Delete a note |

## Visual Flow
- Login/Register Page
- Dashboard showing notes
- Add Note Page
- Edit Note Page
- Delete Note Page

## Technologies Used
- ReactJS
- NestJS
- MySQL
- JWT for authentication
- Swagger & Postman for API testing
