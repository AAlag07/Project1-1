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
  document.getElementById("demo").innerHTML = 5 + 6;
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }