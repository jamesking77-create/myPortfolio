import React from "react";
import '../styles/homePage.css';




function HomePage(){

    function  clearCircles(){
      let opacity = document.querySelector(".circle1").style.opacity = 0.0; 
      setTimeout(opacity, 10); 

    }

    function change(){
     clearCircles()
     document.querySelector(".circle4").innerHTML = "👋";
     document.querySelector(".check").innerHTML = "Check out my";
     document.querySelector(".portfolio").innerHTML = "Portfolio";
     document.querySelector(".sayhello").innerHTML = "Say Hello";
     document.querySelector(".unlock").innerHTML = ""
     
    }

 

    
    return(
        <div className="h-main-container" >
            <div className="h-main-container-inner">
         
            <div className="topnav">
                <div className="whitespace"></div>
                <li className="portfolio"></li>
                <li className="sayhello"></li>
            </div>
            
            <p className="james">  HI i'm <span className="j">james</span>, welcome to my space.</p>
           
            <div className="unlock">Unlock</div>

            <div className="h-page-body1">
                <div className="circle1">
                    <div className="circle2">
                        <div className="circle3">
                            <div className="circle4" onClick={change}>🔒</div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="check"></div>
            </div>
            <div className="h-page-body2">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3">
                </div>
            </div>
            
          </div> 
        </div>
    )
} 
export default HomePage;