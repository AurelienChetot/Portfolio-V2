import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Pages

import App from "./App";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projet",
        element: <Projet />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
