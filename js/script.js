const init = function() {
  const hamb = document.querySelector(".navbar__burger");
  const menuList = document.querySelector(".navbar__menu");

  const menu = function() {
    menuList.classList.toggle("navbar__menu--display");
  };
  hamb.addEventListener("click", menu);
};

window.onload = function() {
  init();
};
