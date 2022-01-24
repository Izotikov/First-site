localStorage.setItem('myKey', 0);
let localValue = localStorage.getItem('myKey');
function listen() {
  document.getElementById("type1").addEventListener('click', function() {
    document.getElementById("output").innerHTML = "Your message was sent to me, thank you!";
    localValue++;
    document.getElementById("outpur").innerHTML = localValue; //"myValue"
  });
}

document.addEventListener('DOMContentLoaded', listen);
