import { createBrowserRouter } from "react-router-dom";
import { App } from "@/_layouts";
import Shop from '@/pages/shop'
import About from "@/pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/about',
        element: <Shop/>
      },
      {
        path: '/shop',
        element: <About/>
      }
    ]
  },
]);