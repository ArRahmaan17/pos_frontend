import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import App from './App';
import Role from './pages/Role';
const router = createBrowserRouter(
  [
    { path: '/', element: <Login /> },
    { path: '/registration', element: <Registration /> },
    { path: '/home', element: <App /> },
    { path: '/role', element: <Role /> },
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
