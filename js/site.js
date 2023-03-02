function time() {
  var currentdate = new Date(); 
  var timenow = + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
    document.getElementById("dateButton").innerHTML = "Submitted at: "+timenow;
  }