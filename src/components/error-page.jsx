import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../nav.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div className="error">
        <code className="" style={{marginTop:"8rem", display:"flex", color:"red", fontSize:"20px",justifyContent:"center", alignItems:"center", textAlign:"center"}}>Error</code>
      <h1 style={{fontSize:"6rem", margin:"20px",marginTop:"0px", fontWeight:"lighter", textAlign:"center", fontFamily:""}}>404</h1>
      <h2 className="err-body" style={{ marginTop:"4rem", textAlign:"center", fontWeight:"lighter"}}>There's Nothing Here</h2>
      <Link to="/" className="back-home-btn">😐 Back to HOME &#x27F6;</Link>
      </div>


      <Footer />
    </>
  );
}

