import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
// import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Service from "../Pages/Services/Service";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import Main from "../Shared/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/login", element: <Login /> },
      { path: "/services", element: <Service /> },
      { path: "/serviceDetails", element: <ServiceDetails /> },
      { index: true, element: <Home /> },
    ],
  },
]);
