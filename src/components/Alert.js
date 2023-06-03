import React from 'react'
import {MdOutlineCancel} from "react-icons/md"

const Alert = (props) => {
  const { type, message } = props;

 const HideAlert = () => {
    document.querySelector('.alert-container').style.display = "none"
  }
  setTimeout(HideAlert,1500);
    
  return (
    <div className={`alert-container alert`} role='alert'>
      <div className={`Alert ${type}`}>
        <span className={`alert-msg text-${type}`}>{type +" : "+ message}</span> 
        <span  className='cancel-btn'><MdOutlineCancel className="cancel-click" onClick={HideAlert} size={28} style={{marginRight:"10px"}}/></span>
      </div>
    </div>
  )};
  
  export default Alert;
