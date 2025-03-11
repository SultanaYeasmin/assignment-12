import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/login/Login';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/sign-up",
      element: <SignUp/>,
    },
  ]);

export default router;