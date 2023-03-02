function time() {
  var currentdate = new Date(); 
  var timenow = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
  document.getElementById("overlay-text").innerHTML = "Submitted at: " + timenow;
  }

function on() {
  document.getElementById("overlay").style.display = "block";
}
  
function off() {
  document.getElementById("overlay").style.display = "none";
}