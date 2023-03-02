var currentdate = new Date(); 
var timeNow = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();


function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay-text").innerHTML = "Submitted at: " + timeNow + "\nThank you for submitting\nCheck your email for more information";
  document.getElementById("form").style.display = "none";
}