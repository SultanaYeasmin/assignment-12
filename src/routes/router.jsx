import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout.jsX';
import PrivateRoute from '../routes/PrivateRoute'
import DeliveryMenRoute from '../routes/DeliveryMenRoute'
import AdminRoute from '../routes/AdminRoute'
import AllDeliveryMen from  '../pages/Dashboard/Admin/AllDeliveryMen';
import AllParcels from  '../pages/Dashboard/Admin/AllParcels';
import AllUsers from  '../pages/Dashboard/Admin/AllUsers';
import Statistics from  '../pages/Dashboard/Admin/Statistics';
import BookParcel from '../pages/Dashboard/Users/BookParcel';
import MyParcels from '../pages/Dashboard/Users/MyParcels';
import MyProfile from '../pages/Dashboard/Users/MyProfile';
import MyDeliveryList from '../pages/Dashboard/DeliveryMen/MyDeliveryList';
import MyReviews from '../pages/Dashboard/DeliveryMen/MyReviews';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/sign-up",
      element: <SignUp/>,
    },
    {
      path:'/dashboard',
      // element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      element: <DashboardLayout/>,
      children:[

        //user-routes
        {
          path: 'book-parcel',
          // element: <PrivateRoute><BookParcel/></PrivateRoute>,
          element: <BookParcel/>,
        },
        {
          path: 'my-parcels',
          // element: <PrivateRoute><MyParcels/></PrivateRoute>,
          element:<MyParcels/>,
        },
        {
          path: 'my-profile',
          // element: <PrivateRoute><MyProfile/></PrivateRoute>,
          element: <MyProfile/>,
        },


        //delivery-man-routes
        {
          path: 'my-delivery-list',
          element: <PrivateRoute><DeliveryMenRoute><MyDeliveryList/></DeliveryMenRoute></PrivateRoute>,
        },
        {
          path: 'my-reviews',
          element:<PrivateRoute><DeliveryMenRoute><MyReviews/></DeliveryMenRoute></PrivateRoute> ,
        },
        

        //admin routes
        {
          path: 'all-parcels',
          element:<PrivateRoute> <AdminRoute><AllParcels/></AdminRoute></PrivateRoute> ,
        },
        {
          path:'all-users' ,
          element:<PrivateRoute> <AdminRoute><AllUsers/></AdminRoute></PrivateRoute> ,
        },
        {
          path: 'all-delivery-men',
          element:<PrivateRoute> <AdminRoute><AllDeliveryMen/></AdminRoute></PrivateRoute> ,
        },
        {
          path:'statistics' ,
          element: <PrivateRoute> <AdminRoute><Statistics/></AdminRoute> </PrivateRoute>,
        }
        
      ]
    }
  ]);

export default router;

// ❖	Users Will See -
//  Book a Parcel, My Parcels, My Profile menu in the sidebar.

// ❖	Delivery Men Will See -
//  My Delivery List, and My Reviews menu in the sidebar.

// ❖	Admin Will See - 
// All Parcels, All Users, All Delivery Men,
//  Statistics, menu in the sidebar.