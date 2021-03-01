function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

i = 0;

function add() {
  if (i >= 0) {
    document.getElementById("amount").innerHTML = i += 1;
  }
}
