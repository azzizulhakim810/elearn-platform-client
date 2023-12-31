import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
// import AddProduct from "../pages/AddProduct/AddProduct";
// import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllAssignments from "../pages/AllAssignments/AllAssignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../pages/MyAssignment/MyAssignments";
import SubmittedAssignment from "../pages/SubmittedAssignment/SubmittedAssignment";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import ViewSingleAssignment from "../pages/ViewSingleAssignment/ViewSingleAssignment";
// import BrandBasedProducts from "../pages/BrandBasedProducts/BrandBasedProducts";
// import SingleProductDetails from "../pages/SingleProductDetails/SingleProductDetails";
// import UpdateProduct from "../components/UpdateProduct/UpdateProduct";


export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/allAssignments',
        element:<AllAssignments></AllAssignments>,
        loader: () => fetch('https://elearn-platform-server.vercel.app/assignmentsCount')
      },
      {
        path:'/singleAssignment/:id',
        element:<PrivateRoute><ViewSingleAssignment></ViewSingleAssignment></PrivateRoute>,
        loader: ({params}) => fetch(`https://elearn-platform-server.vercel.app/assignment/singleOne/${params.id}`)
      },
      {
        path:'/createAssignment',
        element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path:'/myAssignment',
        element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
      },
      {
        path:'/submittedAssignment',
        element:<PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>
      },
      
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({params}) => fetch(`https://elearn-platform-server.vercel.app/assignment/updateOne/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  }
])