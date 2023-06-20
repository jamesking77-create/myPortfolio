import React from "react";
import "../styles/homePage.css";
// import { Link } from 'react-router-dom';
import github from "../../../assets/images/github.png";
import linkedin from "../../../assets/images/linkedin (1).png";
import tweeter from "../../../assets/images/twitter (1).png";
import insta from "../../../assets/images/instagram.png";
import java from "../../../assets/images/java.png";
import python from "../../../assets/images/python-language-logotype.png";
import js from "../../../assets/images/java-script.png";
import behance from "../../../assets/images/behance.png";
import dribble from "../../../assets/images/dribble (1).png";
import discord from "../../../assets/images/discord.png";
import docs from '../../../assets/images/wired-outline-56-document.json'
import  Lottie from "lottie-react";

function HomePage() {
  function scrollToBottom(timedelay = 25) {
    var scrollId;
    var height = 3;
    var minScrollHeight = 80;
    scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
        window.scrollBy(0, minScrollHeight);
      } else {
        clearInterval(scrollId);
      }
      height += minScrollHeight;
    }, timedelay);
  }

  function change() {
    document.querySelector(".h-body2").style.marginTop = "0%";
    // document.querySelector(".circle1").style.height = "40%";
    document.querySelector(".circle4").innerHTML = " ";
    // document.querySelector(".h-page-body1").style.height = "20%";
    document.querySelector(".portfolio").innerHTML = "  &#8594; Profile";
    document.querySelector(".sayhello").innerHTML = "Say Hello";
    document.querySelector(".unlock").style.display = "none";
    document.querySelector(".james").innerHTML = "Take a tour.";
    document.querySelector(".circle1").style.display = "none";

    //  document.querySelector(".h-main-container").style.height = "200vh";
    scrollToBottom();
    setTimeout(() => {
      document.querySelector(".h-body2").animation = "fadeIn 5s";
    }, 500);

    setTimeout(() => {
      document.getElementById("box1").style.marginTop = "2%";
    }, 500);

    setTimeout(() => {
      document.getElementById("box2").style.marginTop = "2%";
    }, 800);

    setTimeout(() => {
      document.getElementById("box3").style.marginTop = "2%";
    }, 1100);
  }

  function move() {
    document.querySelector("");
  }

  function showProfile() {
    window.location.href = "page2";
  }

  function showFeeback(){
    window.location.href = "page3";
  }

  return (
    
    <div className="h-main-container" style={{ height: "100vh" }}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="h-main-container-inner">
        <div className="topnav">
          <div className="whitespace"></div>
          <li className="portfolio" onClick={showProfile}></li>
          <li className="sayhello" onClick={showFeeback}></li>
        </div>

        <div className="h-page-body1">
          <p className="james">
            {" "}
            HI, i'm <span className="j">james</span>, a software engineer, welcome to my space.
          </p>
          <div className="unlock">
            Open.
          </div>
          <div className="circle1">
            <div className="circle2">
              <div className="circle3">
                <div className="circle4" onClick={change}>
                      <Lottie animationData={docs}></Lottie>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-body2">
          <div className="h-page-body2">
            <div className="box1" id="box1">
              <div className="collaborations" id="b-i">
                <p id="w">collaborations</p>
              </div>
            
              <div className="c2">
                <div className="cc2">
                  <img src={github} alt="" id="dr" />
                </div>
                <a
                  id="cw"
                  href="https://github.com/jamesking77-create"
                  target={"_blank"}
                >
                  Git-hub
                </a>
              </div>
              <div className="c3">
                <div className="cc3">
                  <img src={discord} alt="" id="dc" />
                </div>
                <a
                  id="cw"
                  href="https://discord.com/channels/@me"
                  target={"_blank"}
                >
                  Discord
                </a>
              </div>
              <div className="c1">
                <div className="cc1">
                  <img src={behance} alt="" id="be" />
                </div>
                <a
                  id="cw"
                  href="https://www.behance.net/jamesasuelimen"
                  target={"_blank"}
                >
                  Behance
                </a>
              </div>

            </div>

            <div className="box2" id="box2">
              <div className="recent-w" id="b-i">
                <p id="w">Recent works</p>
              </div>
              <div className="r1" onTouchMoveCapture={move}>
                <div className="darker">
                  <a className="rc1" href="http://jamesking77-create.github.io/TicTacToe" style={{width: '100px'}}   target={"_blank"}>
                    <a
                      id="rw"
                      
                      target={"_blank"}
                    >
                      &#8594;
                    </a>
                  </a>
                </div>
              </div>

              <div className="r2">
                <div className="darker">
                  <a className="rc2"   href="https://github.com/jamesking77-create/tweeters-pro"   target={"_blank"}>
                    <a
                      id="rw"
                    >
                      &#8594;
                    </a>
                  </a>
                </div>
              </div>

              <div className="r3">
                <div className="darker">
                  <a className="rc3"  href="https://github.com/jamesking77-create/script"   target={"_blank"}>
                    <a
                      id="rw" 
                    >
                      &#8594;
                    </a>
                  </a>
                </div>
              </div>
            </div>

            <div className="box3" id="box3">
              <div className="socials" id="b-i">
                <p id="w">Socials</p>
              </div>
              <div className="s1">
                
                  <img src={github} alt="" id="git" />
               
                <a
                  id="sw"
                  href="https://github.com/jamesking77-create"
                  target={"_blank"}
                >
                  Git-hub
                </a>
              </div>

              <div className="s2">
              
                  <img src={linkedin} alt="" id="in" />
               
                <a
                  id="sw"
                  href="https://www.linkedin.com/in/jamesasuelimen77/"
                  target={"_blank"}
                >
                  Linkedin
                </a>
              </div>

              <div className="s3">
               
                  <img src={tweeter} alt="" id="tw" />
              
                <a
                  id="sw"
                  href="https://twitter.com/JamesAsuelimen"
                  target={"_blank"}
                >
                  Twitter
                </a>
              </div>

              <div className="s4">
                <div id="s4">
                  <img src={insta} alt="" id="inst" />
                </div>
                <a
                  id="sw"
                  href="https://www.instagram.com/_jamess_kingg/"
                  target={"_blank"}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <footer>
            <div className="footer"></div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
