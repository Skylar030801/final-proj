function openNav() {
  const links = document.getElementById("nav-links");

  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}
