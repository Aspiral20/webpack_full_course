import { createRoot } from "react-dom/client";
import '@/styles/index.scss';
import { RouterProvider } from "react-router";
import { router } from "@/router";

const root = document.getElementById('root')

if (!root) {
  throw new Error("root not found!")
}

const reactDOM = createRoot(root)
reactDOM.render(
  <RouterProvider router={router}/>
)