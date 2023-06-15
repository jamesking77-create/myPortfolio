import React from "react";
import '../styles/sayHello.css';
export function SayHello(){


    
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.getElementById('rc')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'


 function rate(e){

    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

 }



  function sendFeedBack(){
    panel.innerHTML = `
        
    Thank You!
    
    Feedback : ${selectedRating}
    We'll use your feedback to improve our customer support
`
  }


function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}




    return(
    
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    <title>Let Us Know Your Feedback || Learning Robo</title>
  </head>
  <body>
    <div id="panel" className="panel-container">
      <strong>How satisfied are you with our <br /> customer support performance?</strong>
      <div className="ratings-container" id="rc" onClick={rate}>
        <div className="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187150.svg" alt=""/>
          <small>Unhappy</small>
        </div>

        <div className="rating">
          <img src="https://image.flaticon.com/icons/svg/187/187136.svg" alt=""/>
          <small>Neutral</small>
        </div>

        <div className="rating active">
          <img src="https://image.flaticon.com/icons/svg/187/187133.svg" alt=""/>
          <small>Satisfied</small>
        </div>
      </div>
      <button className="btn" id="send" onClick={sendFeedBack}>Send Review</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>

    )
}