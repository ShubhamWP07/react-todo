import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import Body from "./Body"
import HotItem from "./HotItem"
import {createBrowserRouter, RouterProvider } from 'react-router-dom'


let appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorelement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/HotItem",
        element: <HotItem />,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);



