// src/main.jsx

import React, { StrictMode, Suspense } from 'react'; // Importing React, StrictMode, and Suspense for handling lazy loading
import { createRoot } from 'react-dom/client'; // To create the root of the application
import './index.css'; // Importing global CSS file
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // For handling routing
import App from './App.jsx'; // Importing the main App component
import Layout from './components/Layout'; // Importing the Layout component for the main structure
import { Error } from './components/Error'; // Importing the error page component

// Lazy-loaded components (these are only loaded when they are needed, improving performance)
const Home = React.lazy(() => import('./components/Home'));
const Login = React.lazy(() => import('./components/pages/Login'));
const Register = React.lazy(() => import('./components/pages/Register'));

// Setting up routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error component in case of failed route loading
    children: [
      {
        path: '/', // Sub-path for the Layout component
        element: <Layout />, // Layout component for main structure
        children: [
          { index: true, element: <Home /> } // Default route for the home page
        ],
      },
      { path: '/auth/login', element: <Login /> }, // Route for login page
      { path: '/auth/register', element: <Register /> }, // Route for register page
    ],
  },
]);

// Rendering the root of the application with StrictMode and Suspense for lazy loading
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="text-center mt-8">Loading...</div>}>
      <RouterProvider router={router} /> {/* Providing the router to the app */}
    </Suspense>
  </StrictMode>
);
