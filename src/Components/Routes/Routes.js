import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import Register from "../Pages/Register";
import Review from "../Pages/Review";
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
      { path: "/register", element: <Register /> },
      { path: "/blog", element: <Blog /> },
      { path: "/reviews", element: <MyReviews /> },
      { path: "/addService", element: <AddService /> },
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
