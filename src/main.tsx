import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { Discover } from "./pages/Discover/Discover";
import { Join } from "./pages/Join/Join";
import { Layout } from "./pages/Layout/Layout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/join",
        element: <Join />,
      },
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);