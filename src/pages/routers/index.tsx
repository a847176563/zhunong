import { createHashRouter } from "react-router-dom";
// import { MFAView } from "@/views/mfa/index";
import App from "../../views/home/index";
import { RootLayout } from "../../layout/layout";

// const BASE_URL = import.meta.env.BASE_URL;

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);
