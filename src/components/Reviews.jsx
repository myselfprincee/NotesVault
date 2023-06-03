import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Reviews = (props) => {

  const name = props.name;
  const review = props.review;
  const imagelink = props.imagelink;
  const star1_display = props.star1_display;
  const star2_display = props.star2_display;
  const star3_display = props.star3_display;
  const star4_display = props.star4_display;
  const star5_display = props.star5_display;

  return (
    <>
      
        
          <div className='card'> 
            <img className='card-img' src={imagelink} height="60px" width="60px" alt="users-pictures"  draggable="false" loading='lazy'/>
            <span style={{display:"flex", flexDirection:"column" , marginLeft:"1rem"}}>
            <h4>{name}</h4>
            <div>
            <IconContext.Provider value={{ color: "#8ae595", size: "1rem",className:"", marginTop:"0", display:"flex", flexDirection:"row" }}>
              <RiStarSFill style={{display:`${star1_display}`}}/>
              <RiStarSFill style={{display:`${star2_display}`}}/>
              <RiStarSFill style={{display:`${star3_display}`}}/>
              <RiStarSFill style={{display:`${star4_display}`}}/>
              <RiStarSFill style={{display:`${star5_display}`}}/>
              
            </IconContext.Provider>
            </div>
            <p >
              {/* Great website, very simple to use  */}{review}
            </p>
            </span>
          </div>

      
    </>
  )
}

export default Reviews
