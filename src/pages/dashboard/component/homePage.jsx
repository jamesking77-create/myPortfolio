import React from "react";
import '../styles/homePage.css';



function HomePage(){



    function change(){
     document.querySelector(".circle4").innerHTML = "👋";
     document.querySelector(".check").innerHTML = "Check out my"
     document.querySelector(".portfolio").innerHTML = "Portfolio"
    }

    

    return(
        <div className="h-main-container" >
            <div className="h-main-container-inner">
         
            <div className="topnav">
                <div className="whitespace">HI i'm james</div>
                <li className="portfolio"></li>
                <li className="sayhello">Say Hello</li>
            </div>
            <div className="h-page-body1">
                <div className="circle1">
                    <div className="circle2">
                        <div className="circle3">
                            <div className="circle4" onClick={change}>🔒</div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="check">Unlock</div>
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