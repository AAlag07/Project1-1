var currentdate = new Date(); 
var timeNow = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();


function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay-text").innerHTML = "Submitted at: " + timeNow;
  document.getElementById("overlay-text2").innerHTML = "Glad you could join us"
  document.getElementById("overlay-text3").innerHTML = "Check your email for more information"
  document.getElementById("form").style.display = "none";
}