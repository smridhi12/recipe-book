import React from 'react';
import Navbar from '../components/Navbar';
import "./Landing.css";
import { Card } from '@mui/material';

function Landing() {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{textAlign:"center", fontSize:"46px", paddingTop:"10px", fontWeight:"bold"}}>
       Bringing People Together <br/>
        With Our Vibrant Food Recipes
      </div>
      <div className="wrapper" style={{paddingTop:"20px"}}>
        <div className="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" className="img" alt="Gallery Image 1" /> </div>
        <div className="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(48).jpg" className="img" alt="Gallery Image 2" /> </div>
        <div className="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" className="img" alt="Gallery Image 3" /> </div>
        <div class="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(44).jpg" class="img"/></div>
        <div class="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg" class="img"/></div>
        <div class="box"> <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(47).jpg" class="img"/></div>
        <div class="box"> <img src="https://mdbootstrap.com/img/Others/food6.jpg" class="img"/></div>
        <div class="box"> <img src="https://mdbootstrap.com/img/Others/food7.jpg" class="img"/></div>
      </div>

      <h3 style={{textAlign:"center", fontSize:"40px", paddingTop:"20px"}}> JOIN US </h3>
      <div>
        {/* <Card/> */}
      </div>
    </div>
  );
}

export default Landing;
