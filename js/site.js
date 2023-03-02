function time() {
  var currentdate = new Date(); 
  var message = "Thank you for signing up!" + "\n" + "Check your inbox for more information";
  var timenow = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
  document.getElementById("overlay-text").innerHTML = "Submitted at: " + timenow + message;
}


function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("form").style.display = "block";
}
  
function off() {
  document.getElementById("overlay").style.display = "none";
}