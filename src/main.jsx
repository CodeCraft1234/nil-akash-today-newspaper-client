
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import National from "./Pages/National/National";
import InterNational from "./Pages/InterNational/InterNational";
import Politics from "./Pages/Politics/Politics";
import Economics from "./Pages/Economics/Economics";
import WholeBD from "./Pages/WholeBD/WholeBD";
import Entertainment from "./Pages/Entertainment/Entertainment";
import Sports from "./Pages/Sports/Sports";
import Education from "./Pages/Education/Education";
import WestBengal from "./Pages/WestBengal/WestBengal";
import Health from "./Pages/Health/Health";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/national',
        element: <National></National>
      },
      {
        path:'/interNational',
        element: <InterNational></InterNational>
      },
      {
        path:'/politics',
        element: <Politics></Politics>
      },
      {
        path:'/economics',
        element: <Economics></Economics>
      },
      {
        path:'/wholeBD',
        element: <WholeBD></WholeBD>
      },
      {
        path:'/Entertainment',
        element: <Entertainment></Entertainment>
      },
      {
        path:'/Sports',
        element: <Sports></Sports>
      },
      {
        path:'/Education',
        element: <Education></Education>
      },
      {
        path:'/WestBengal',
        element: <WestBengal></WestBengal>
      },
      {
        path:'/Health',
        element: <Health></Health>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);