// Get the elements with class="column"
var elements = document.getElementsByClassName("grid-container")[0];

// Declare a loop variable
var i;

// List View
function listView() {
  elements.style.display = "flex";
}

// Grid View
function gridView() {
  elements.style.display = "grid";
}
