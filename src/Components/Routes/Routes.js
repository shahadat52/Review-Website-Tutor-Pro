import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import Register from "../Pages/Register";
import Service from "../Pages/Services/Service";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import Main from "../Shared/Main";
import PrivateRoute from "./PrivateRoute";

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
      { path: "/register", element: <Register /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
        element: <ServiceDetails />,
      },
      { index: true, element: <Home /> },
    ],
  },
]);
