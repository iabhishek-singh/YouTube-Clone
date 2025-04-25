# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Project Update  YouTube-Clone

##  --> Backend 

### ---> Required Dependencies and Modules 

    ---> (i) npm init
    ---> (ii) npm i
    ---> (iii) npm install jsonwebtoken
    ---> (iv)  npm install cors  
    ---> (v) npm install bcryptjs  dotenv
    ---> (vi) npm install --save-dev nodemon
    ---> (vii) npm install express
    ---> (viii) npm install mongoose
    ---> (ix)npm install multer



## --> Frontend 

### ---> Required Bundler and Freamework

    ---> (i) npm create vite@latest
    ---> (ii) npm install  
    ---> (iii) npm install tailwindcss @tailwindcss/vite
    ---> (iv)  npm install lucide-react
    ---> (V)npm install animate.css --save



# YouTube-Clone - MERN Stack Project

This is a YouTube Clone built using the MERN stack (MongoDB, Express.js, React, Node.js). The project implements user authentication, video browsing, category filters, and video viewing features. The app is fully responsive and designed to replicate the core features of YouTube.

-->  Purpose :
The purpose of this project is to demonstrate a full-stack web application using modern technologies. This clone includes features such as:

User Authentication (Login/Sign-up)

Viewing and browsing videos by category

Searching for videos by title

Responsive layout for mobile, tablet, and desktop screens

--> Features : 
Video Listing: Displays a list of videos from various categories.

Category Filter: Users can filter videos by categories such as Music, Gaming, and more.

Search: A search bar to filter videos based on titles.

User Authentication: Allows users to register, log in, and access personalized content.

Responsive Design: Fully responsive design with a mobile-friendly sidebar and layout.

Tech Stack

Frontend:

React

React Router (for navigation)

Tailwind CSS (for styling)

React.lazy and Suspense (for lazy loading)

Backend:

Node.js

Express.js

MongoDB

JWT (JSON Web Token) for authentication

Bcrypt for password hashing

Multer for file uploads

Database:

MongoDB (used to store user and video data)

Setup
1. Clone the repository

git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

2. Install dependencies

Frontend
 1. Navigate to the frontend directory:

cd frontend

 2. Install the required dependencies:
npm install

Backend

    1.Navigate to the backend directory:
cd backend

    2.Install the required dependencies:
npm install


3. Set up environment variables
You need to set up the following environment variables:

Backend:

MONGO_URI: Your MongoDB connection string (e.g., from MongoDB Atlas).

JWT_SECRET: A secret key for JWT signing.

PORT: The port where the backend server will run (default: 5000).

Frontend:

REACT_APP_API_URL: The base URL for the backend API (e.g., http://localhost:5000).

4. Start the servers
Frontend
To run the frontend (React app), navigate to the frontend directory and run:
npm start

The app will be available at http://localhost:3000.

Backend
To run the backend server, navigate to the backend directory and run:
npm start
The server will be available at http://localhost:5000.

Usage
Sign Up / Login:

Users can create an account or log in using the authentication forms.

Authentication is handled using JWT and Bcrypt for password hashing.

Browse Videos:

Once logged in, users can browse videos by category or search by title.

Videos are filtered based on selected categories (e.g., Music, Gaming, etc.).

Watch Videos:

Clicking on a video takes users to an external link to watch the video.

Responsive Design:

The layout is responsive, adjusting for mobile, tablet, and desktop views.

The sidebar can be toggled on mobile devices for navigation.

Folder Structure
The project is structured as follows:

youtube-clone/
├── backend/
│   ├── controllers/                # Controllers for handling requests
│   │   ├── authController.js       # Handle user authentication logic
│   │   ├── videoController.js      # Handle video-related logic
│   ├── models/                     # Mongoose models for the database
│   │   ├── userModel.js            # User model
│   │   ├── videoModel.js           # Video model
│   ├── routes/                     # API route definitions
│   │   ├── authRoutes.js           # Authentication routes
│   │   ├── videoRoutes.js          # Video routes
│   ├── services/                   # Business logic and helpers
│   │   ├── authService.js          # Authentication logic (e.g., JWT generation)
│   │   ├── videoService.js         # Video handling logic (e.g., fetching videos)
│   ├── .env                        # Environment variables
│   ├── app.js                      # Main backend application setup
│   ├── server.js                   # Backend server initialization
├── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Header.js           # Header component
│   │   │   ├── Sidebar.js          # Sidebar component
│   │   │   ├── VideoList.js        # Video listing component
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.js             # Home page component
│   │   │   ├── Login.js            # Login page component
│   │   │   ├── Register.js         # Register page component
│   │   ├── services/               # API service files
│   │   │   ├── api.js              # Axios instance for API calls
│   │   ├── App.js                  # Main application component
│   │   ├── index.js                # React entry point
│   │   ├── styles.css              # Global styles
│   ├── .env                        # Frontend environment variables
│   └── package.json                # Frontend dependencies and scripts
├── README.md                       # Project documentation
├── .gitignore                      # Git ignore file
└── LICENSE                         # Project license


-----> Key Folders and Files:
backend/controllers:

authController.js: Contains functions to handle user authentication such as login, registration, and JWT generation.

videoController.js: Contains functions to handle video-related logic like fetching videos, filtering by categories, etc.

backend/models:

userModel.js: Defines the Mongoose schema for user data (e.g., username, email, password).

videoModel.js: Defines the Mongoose schema for video data (e.g., title, video URL, category).

backend/routes:

authRoutes.js: Defines the API routes for user authentication (login, register).

videoRoutes.js: Defines the API routes for video management (fetching videos, filtering).

backend/services:

authService.js: Contains the business logic for handling authentication (e.g., generating JWT tokens).

videoService.js: Contains the business logic for handling video operations (e.g., fetching videos from the database).

frontend/components: Contains reusable UI components such as the Header, Sidebar, and VideoList components that are used throughout the app.

frontend/pages: Contains page components such as Home, Login, and Register. These are the pages that the user interacts with directly.

frontend/services: Contains the API service file (api.js), which manages Axios requests to the backend.


Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes.

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).

Create a pull request.


Acknowledgements

React - Frontend library used for building the user interface.

Node.js - Server-side JavaScript runtime.

MongoDB - NoSQL database used to store data.

JWT - For handling token-based authentication.

Bcrypt - For securely hashing passwords.

Multer - For handling file uploads.