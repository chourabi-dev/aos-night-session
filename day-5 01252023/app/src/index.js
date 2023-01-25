import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ErrorPage from './pages/Error';
import UsersPage from './pages/Users';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement:<ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  
  




]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
