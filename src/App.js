import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './pages/Layout';
import ToDo from './pages/ToDo';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Projects from './pages/Projects';
import Money from './pages/Money';
import Calendar from './pages/Calendar';
import Blog from './pages/Blog';
import Project from './pages/Project';

import './assets/styles/main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { breadcrumb: "Home" },
      },
      {
        path: "ToDo",
        element: <ToDo />,
        handle: { breadcrumb: "ToDo" },
      },
      {
        path: "projects",
        element: <Projects />,
        handle: { breadcrumb: "Projects" },
      },
      {
        path: "projects/:id",
        element: <Project />,
        handle: {
          breadcrumb: (match) => `Projects - ${match.params.id}`,
        },
      },
      {
        path: "weather",
        element: <Weather />,
        handle: { breadcrumb: "Weather" },
      },
      {
        path: "money",
        element: <Money />,
        handle: { breadcrumb: "Money" },
      },
      {
        path: "calendar",
        element: <Calendar />,
        handle: { breadcrumb: "Calendar" },
      },
      {
        path: "blog",
        element: <Blog />,
        handle: { breadcrumb: "Blog" },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;