import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/error-page';
// import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Notes from './components/Notes';

function App(props) {
  // const [alert, setAlert] = useState({type: '', message: ''});


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
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup method="Signup" ormethod="LOGIN" methodlink="/login" methoddisplay2="40px" />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App;
