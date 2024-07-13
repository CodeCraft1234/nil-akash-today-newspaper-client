
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import AddNews from "./Components/AddNews/AddNews";
import DashboardRoot from "./Pages/Dashboard/DashboardRoot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageDetails from "./Pages/PageDetails/PageDetails";
import Category from "./Pages/Category";
import AuthProvider from "./Security/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Security/Login";
import AdminHome from "./Pages/Dashboard/AdminHome";
import AddProduct from "./Pages/Dashboard/Routes/AddProducts";
import UpdateProducts from "./Pages/Dashboard/Routes/Updateproducts";
import Settings from "./Pages/Dashboard/Settings";

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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/category/:categorys',
        element: <Category></Category>
      },
      {
        path:'/newsDetails/:id',
        element: <PageDetails></PageDetails>,
        loader:({params})=>fetch(`http://localhost:5001/news/${params.id}`)
      },
      {
        path:'/addNews',
        element: <AddNews></AddNews>
      },
      {
        path:'dashboard',
        element:<DashboardRoot></DashboardRoot>,
        children:[
          {
            path:'/dashboard/admin/addNews',
            element:<AddNews></AddNews>
          },
          // {
          //   path:'/dashboard/admin/adminHome',
          //   element:<AdminHome></AdminHome>
          // },
          {
            path: "/dashboard/admin/settings",
            element: <Settings />,
          },
          {
            path:'/dashboard/admin/updateProducts/:id',
            element:<UpdateProducts></UpdateProducts>,
            loader: ({ params }) => fetch(`https://hirikbazar.vercel.app/products/${params.id}`)
          },
        ]
      }
    ]
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <HelmetProvider>
         <AuthProvider>
               <RouterProvider router={router} />
          </AuthProvider> 
    </HelmetProvider> 
    </QueryClientProvider>
  </React.StrictMode>
);