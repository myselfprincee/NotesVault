import React , {useState} from 'react'
import img3 from '../images/signup.webp'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Alert from './Alert';

export default function Signup(props) {


    const [state, setState] = useState(false)
    const [alert, setAlert] = useState(null);
  const [credentials, setCredentials] = useState({name:"", email: "", password: ""});
  const navigate = useNavigate();

    const toggleBtn = () => {
        setState(prevstate => !prevstate)
    }

    let method = props.method;
    let methoddisplay = props.methoddisplay;
    let methoddisplay2 = props.methoddisplay2;

    const handleRegister = async (e) => {
      e.preventDefault();
      const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: credentials.name, email: credentials.email, password:credentials.password }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success){
        // the the auth token to local storge
        localStorage.setItem('token', json.authtoken)
        setAlert({ type: 'Success', message: 'Account has been created Successfully' });
        setTimeout(() => setAlert(null), 1000);
        navigate("/notes");

      }else {
        setAlert({ type: 'Error', message: 'Invalid Credentials' });
        setTimeout(() => setAlert(null), 1000);
      }
    };

    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    
    
    
    return (
      <>
      <Navbar/>
      <Alert/>
    <div className='signup-bg'>
    <div className='signupcontainer' style={{marginTop:`${methoddisplay2}`}}>
      <div className='form-container'>
        <img className='signup-img' src={img3} loading='eager' alt=" a girl reading notes"/>
        <hr className='divider'/>
        <form className='form' onSubmit={handleRegister}>

            <div className='input-label' style={{display:`${methoddisplay}`}}>
            <div  className='label-p'>
            <label htmlFor='name'>Name</label>
            <p className='required'>*</p>
            </div>
            <input type="text" name='name' id='name' required onChange={onChange}/>
            </div>

            <div className='input-label'>
            <div className='label-p'>
            <label htmlFor='name'>Email</label>
            <p className='required'>*</p>
            </div>
            <input type="email" name="email" id="email" required onChange={onChange}/>
            </div>

            <div className='input-label'>
            <div  className='label-p'>
            <label htmlFor='name'>Password</label>
            <p className='required'>*</p>
            </div>
            <input type={state ? "text" : "password"} name="password" id="Password" required onChange={onChange}/><i onClick={toggleBtn}>{state ? <FaRegEye className='eye'/> : <FaRegEyeSlash className='eye'/>}</i>

            </div>
          <input type="submit" value={method} className='signup-btn'/>

            <div>
            <p className='cont'><span className='hrl'></span><Link to="/login" className='login-txt'>LOGIN</Link><span className='hrl'></span></p>
            </div>
        </form>
        </div>

    </div>
    </div>
    </>
  )
}
