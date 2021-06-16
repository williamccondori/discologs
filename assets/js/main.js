/*----------  SHOW NAVBAR  ----------*/

const showMenu = (headerToggle, navbarId) => {
  const toggle = document.getElementById(headerToggle);
  nav = document.getElementById(navbarId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // add show class menu
      nav.classList.toggle("show-menu");
      // change icon
      toggle.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "navbar");

const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));
