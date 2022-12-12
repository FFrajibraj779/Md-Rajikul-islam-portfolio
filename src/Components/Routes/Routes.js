import { createBrowserRouter, Routes } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutMe from "../Pages/About/AboutMe";
import Blogs from "../Pages/Blogs/Blogs";
import ProjectDetails from "../Pages/Details/ProjectDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://rajikul-portfolio-server.vercel.app/projectdata/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
