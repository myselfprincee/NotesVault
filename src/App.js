import './App.css';
import React from 'react';
// import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider, Routes, Route, Router
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/error-page';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { useEffect } from 'react';
// import {  useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Loader from './components/Loader';
import { Suspense } from 'react';



function App() {

  // const [loading, setLoading] = React.useState(true);
  // const [data, setData] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/notes",
      element: <Notes />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup method="Signup" ormethod="LOGIN" methodlink="/login" methoddisplay2="40px" />,
    }
  ]);


  return (

    <Suspense fallback={<Loader/>}>

      <RouterProvider router={router} rel="preload">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/notes" exact component={Notes} />
            <Route path="*" exact component={ErrorPage} />
          </Routes>
        </Router>
        <Footer />
      </RouterProvider>
      <Analytics mode={'production'} />

    </Suspense>
  )
}

export default App