import { createBrowserRouter } from "react-router-dom";
import { App } from "@/_layouts";
import React, { Suspense } from "react";
import Shop from '@/pages/shop'
import About from "@/pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/shop',
        element: <Suspense fallback={"Loading..."} children={<Shop/>}/>
      },
      {
        path: '/about',
        element: <Suspense fallback={"Loading..."} children={<About/>}/>
      }
    ]
  },
]);