var currentdate = new Date(); 
var message = "Thank you for signing up!" + "\n" + "Check your inbox for more information";
var timeNow = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();


function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay-text").innerHTML = "Submitted at: " + timeNow + message;
  document.getElementById("form").style.display = "none";
}