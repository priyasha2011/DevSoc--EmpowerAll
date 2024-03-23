import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/login";
import Signup from "./components/signup";
import Report from "./components/ReportIncident";
import Blogs from './components/Blogs';
import UserApp from './components/LoggedIn'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
  },
  {
    path: "home",
    element: <App/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "report",
    element: <Report/>,
  },
  {
    path: "blogs",
    element: <Blogs/>,
  },
  {
    path: "userhome",
    element: <UserApp/>,
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
