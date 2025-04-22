import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from "./components/Layout";
import Header from './components/Header.jsx';
import  Login  from "./components/pages/Login.jsx";
import Regiter from "./components/pages/Register.jsx"
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Layout />,
      },
      {
        path:"/auth/login",
        element: <Login />
      },
      {
        path:"/auth/register",
        element: <Regiter />
      }

    ]
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
