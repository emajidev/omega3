// Get the modalin
var modalin = document.getElementById('Modal-singin');
var modalup = document.getElementById('Modal-singup');
// Get the button that opens the modalin
var btnin = document.getElementById("btn-singin");
var btnup = document.getElementById("btn-singup");

// Get the <span> element that closes the modalin
var spanin = document.getElementsByClassName("closein")[0];
var spanup = document.getElementsByClassName("closeup")[0];
// When the user clicks on the button, open the modalin 
btnin.onclick = function() {
  modalin.style.display = "block";
}
btnup.onclick = function() {
  modalup.style.display = "block";
}

// When the user clicks on <span> (x), close the modalin
spanin.onclick = function() {
  modalin.style.display = "none";
}
spanup.onclick = function() {
  modalup.style.display = "none";
}

// When the user clicks anywhere outside of the modalin, close it
window.onclick = function(event) {
  if (event.target == modalin) {
    modalin.style.display = "none";
  }
  if (event.target == modalup) {
    modalup.style.display = "none";
  }
}