import './App.css';
import Loader from './components/Loader';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider, Routes, Route
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
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';



function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API call here
        const response = await axios.get(process.env.REACT_APP_DATABASE_URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <RouterProvider router={router} rel="preload">
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/notes" exact component={Notes} />
            <Route path="*" exact component={ErrorPage} />
          </Routes>
          <Footer />
        </RouterProvider>       
      )}
      <Analytics mode={'production'} />;
    </>
  );
}

export default App;