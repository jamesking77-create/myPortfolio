import React from "react";
import '../styles/homePage.css';
import github from '../../../assets/images/github.png';
import linkedin from '../../../assets/images/linkedin (1).png';
import tweeter from '../../../assets/images/twitter (1).png';
import insta from '../../../assets/images/instagram.png'
import java from '../../../assets/images/java.png';
import python from '../../../assets/images/python-language-logotype.png';
import js from '../../../assets/images/java-script.png';
import behance from '../../../assets/images/behance.png';
import dribble from '../../../assets/images/dribble (1).png';
import discord from '../../../assets/images/discord.png';
import Lottie from 'lottie-react';
import bike from '../../../assets/video/rider 2.json';





function HomePage(){

    

    function scrollToBottom(timedelay=25) {
        var scrollId;
        var height = 3;
        var minScrollHeight = 80;
        scrollId = setInterval(function () {
            if (height <= document.body.scrollHeight) {
                window.scrollBy(0, minScrollHeight);
            }
            else {
                clearInterval(scrollId);
            }
            height += minScrollHeight;
        }, timedelay);           
    }


    function change(){
    
     document.querySelector(".circle4").innerHTML = "👋";
    //  document.querySelector(".check").innerHTML = "Check out my";
     document.querySelector(".portfolio").innerHTML = "Portfolio";
     document.querySelector(".sayhello").innerHTML = "Say Hello";
     document.querySelector(".unlock").innerHTML = ""
     document.querySelector(".james").innerHTML = "<<< Hey there's more >>>";
     scrollToBottom()


    
     document.querySelector(".ridealong").style.display = "flex";


        
   
     setTimeout(() => {
        document.getElementById("box1").style.opacity = "100";
     }, 1000);


     setTimeout(() => {
        document.getElementById("box2").style.opacity = "100";
     }, 1500);

     setTimeout(() => {
        document.getElementById("box3").style.opacity = "100";
     }, 2000);
    }


    
 

    
    return(
        <div className="h-main-container" >
            <div className="h-main-container-inner">
            <div className="topnav">
                <div className="whitespace"></div>
                <li className="portfolio"></li>
                <li className="sayhello"></li>
            </div>
            
          

            <div className="h-page-body1">
            <p className="james">  HI i'm <span className="j">james</span>, welcome to my space.</p>
            <div className="unlock">  Unlock</div>
                <div className="circle1">
                    <div className="circle2">
                        <div className="circle3">
                            <div className="circle4" onClick={change}>🔒</div>
                        </div>
                    </div>
                </div>
               
                
            </div>
            <div className="h-body2">
           <div className="ridealong" style={{display: 'none'}}>
                {/* <div className="check" id="ra"></div> */}
                <Lottie className="bike" id="ra" animationData={bike}/>
           </div>

            <div className="h-page-body2">
                <div className="box1" id="box1">
                    <div className="collaborations" id="b-i"><p id="w">collaborations</p></div>
                    <div className="c1">
                        <div className="cc1">
                            <img src={behance} alt="" id="be"/>
                        </div>
                        <p id="cw">Behance</p>
                    </div>
                    <div className="c2">
                        <div className="cc2">
                            <img src={dribble} alt="" id="dr"/>
                        </div>
                        <p id="cw">Dribble</p>
                    </div>
                    <div className="c3">
                        <div className="cc3">
                            <img src={discord} alt="" id="dc"/>
                        </div>
                        <p id="cw">Discord</p>
                    </div>
                </div>



                <div className="box2" id="box2">
                    <div className="recent-w" id="b-i"><p id="w">Recent work</p></div>
                    <div className="r1">
                        <div className="rc1">
                            <img src={java} alt="" id="jv" />
                        </div>
                        <p id="rw">Java</p>
                    </div>
                    <div className="r2">
                        <div className="rc2">
                            <img src={python} alt="" id="py" />
                        </div>
                        <p id="rw">Python</p>
                    </div>
                    <div className="r3">
                        <div className="rc3">
                            <img src={js} alt="" id="js" />
                        </div>
                        <p id="rw">J-Script</p>
                    </div>
                </div>



                <div className="box3" id="box3">
                    <div className="socials" id="b-i"><p id="w">Socials</p></div>
                        <div className="s1">
                           <div id="sc1">
                             <img src={github} alt="" id="git" />
                           </div> 
                           <p id="sw">github.com/jamesking77-create</p>
                        </div>

                        <div className="s2">
                            <div id="sc2">
                                <img src={linkedin} alt="" id="in" />
                            </div>
                            <p id="sw">linkedin.com/jamesasuelimen77/</p>
                        </div>

                        <div className="s3">
                            <div id="sc3">
                                <img src={tweeter} alt="" id="tw" />
                            </div>
                            <p id="sw">twitter.com/JamesAsuelimen</p>
                        </div>

                        <div className="s4">
                            <div id="sc4">
                                <img src={insta} alt="" id="tw" />
                            </div>
                            <p id="sw">instagram.com/_jamess_kingg/</p>
                        </div>
                </div>
            </div>

            </div>
            
            
          </div> 
        </div>
    )
} 
export default HomePage;