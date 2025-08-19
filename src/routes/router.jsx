import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import PrivateRoute from '../routes/PrivateRoute'
import DeliveryMenRoute from '../routes/DeliveryMenRoute'
import AdminRoute from '../routes/AdminRoute'
import AllDeliveryMen from '../pages/Dashboard/Admin/AllDeliveryMen';
import AllParcels from '../pages/Dashboard/Admin/AllParcels';
import AllUsers from '../pages/Dashboard/Admin/AllUsers';
import Statistics from '../pages/Dashboard/Admin/Statistics';
import BookParcel from '../pages/Dashboard/Users/BookParcel';
import MyParcels from '../pages/Dashboard/Users/MyParcels';
import MyProfile from '../pages/Dashboard/Users/MyProfile';
import MyDeliveryList from '../pages/Dashboard/DeliveryMen/MyDeliveryList';
import MyReviews from '../pages/Dashboard/DeliveryMen/MyReviews';
import UpdateParcel from '../pages/Dashboard/Users/UpdateParcel';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Payment from '../pages/Dashboard/Payment/Payment';
import PaymentSuccess from '../pages/Dashboard/Payment/PaymentSuccess';
import Home from '../pages/Home/Home';



const axiosSecure = useAxiosSecure();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
       
        element: <Home />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    
    children: [

      //user-routes
      {
        path: 'book-parcel',
        element: <BookParcel/>,
        // element: <BookParcel />,
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess/>,
        // element: <PaymentSuccess />,
      },
      {
        path: 'update-parcel/:id',
        element: <UpdateParcel/>,
        // element: <UpdateParcel />,

      },
      {
        path: 'payment',
        element: <Payment/>,
        // element: <Payment />,

      },
      {
        path: 'my-parcels',
        element: <MyParcels/>,
        // element: <MyParcels />,
      },
      {
        path: 'my-profile',
        element: <MyProfile/>,
        // element: <MyProfile />,
      },


      //delivery-man-routes
      {
        path: 'my-delivery-list',
        element: <DeliveryMenRoute><MyDeliveryList/></DeliveryMenRoute>,
        // element: <MyDeliveryList />,
      },
      {
        path: 'my-reviews',
        element:<DeliveryMenRoute><MyReviews/></DeliveryMenRoute> ,
        // element: <MyReviews />,
      },


      //admin routes
      {
        path: 'all-parcels',
        // element: <AllParcels />,

        element: <AdminRoute><AllParcels/></AdminRoute> ,
      },
      {
        path: 'all-users',
        element: <AdminRoute><AllUsers/></AdminRoute> ,  
        // element: <AllUsers />,
        loader: async () => {
          const res = await axiosSecure('/usersCount')
          // //console.log("Loader Response:", res);
          return res.data.count;
        },
      },
      {
        path: 'all-delivery-men',
        element: <AdminRoute><AllDeliveryMen/></AdminRoute> ,
        // element: <AllDeliveryMen />,
      },
      {
        path: 'statistics',
        // element: <Statistics />,
        element:  <AdminRoute><Statistics/></AdminRoute> ,
      }

    ]
  }
]);

export default router;

// // ❖	Users Will See -
// //  Book a Parcel, My Parcels, My Profile menu in the sidebar.

// // ❖	Delivery Men Will See -
// //  My Delivery List, and My Reviews menu in the sidebar.

// // ❖	Admin Will See -
// // All Parcels, All Users, All Delivery Men,
// //  Statistics, menu in the sidebar.


// import { createBrowserRouter } from 'react-router-dom';
// import App from "../App"
// import Home from "../pages/Home/Home"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, // this must render an <Outlet /> or <Home />
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//     ],
//   },
// ]);

// export default router;
