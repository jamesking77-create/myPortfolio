import React from "react";
import "../styles/profile.css";
import java from "../../../assets/images/java.png";
import python from "../../../assets/images/python-language-logotype.png";
import js from "../../../assets/images/java-script.png";

function Profiles() {

    function goToHome(){
        window.location.href = '/'
    }

    setTimeout(() => {
        document.getElementById('pfc').style.marginTop = '2%'
      }, 500);

      
  return (
    <div className="mc">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="upper-container">
        <div className="protopnav">
          <div className="prowhitespace" onClick={goToHome}>&#8592;</div>

          <li className="prosayhello">say hello</li>
        </div>

        <div className="circle"></div>

        <div className="lower-container">
          <div className="profile-container" id="pfc">
            <h3>
              <span style={{ color: "#FCA311" }}>About me.</span> <br />
              Digital nomad and a software engineer in Nigeria, <br />
              sharing thoughts and lessons from his travels, work, and
              connecting with people.
            </h3>

            <h3 className="techs">Technologies</h3>
            <div className="technologies">
              <div className="box1">
                {" "}
                <img src={java} alt="" />
              </div>
              <div className="box2">
                {" "}
                <img src={python} alt="" />
              </div>
              <div className="box3">
                {" "}
                <img src={js} alt="" />
              </div>
            </div>
            <div className="techword">
              <div className="word1">Java</div>
              <div className="word2">Python</div>
              <div className="word3">J-Script</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profiles;
