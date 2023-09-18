import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compoments/Home/Home.jsx';
import About from './Compoments/About/About.jsx';
import Contact from './Compoments/Contact/Contact.jsx';
import Users from './Compoments/Users/Users';
import UsersDetails from './Compoments/UsersDetails/UsersDetails.jsx';
import Posts from './Compoments/Posts/Posts.jsx';
import PostDetails from './Compoments/PostDetails/PostDetails.jsx';
import ErrorPage from './Compoments/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
       
      },
      {
        path:'/user/:usersId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element:<UsersDetails></UsersDetails>
      },
      {
        path:"/posts",
      loader:() =>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
         path:"/post/:postId",
         loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
         element:<PostDetails></PostDetails>
      }
    ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
