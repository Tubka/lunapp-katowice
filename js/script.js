const init = () => {
  const hamb = document.querySelector(".navbar__burger");
  const menuList = document.querySelector(".navbar__menu");
  const lines = [...document.querySelectorAll(".navbar__burger-line")];
  function animationReset(element) {
    element.classList.remove("navbar__burger-animation");
    element.classList.remove("navbar__burger-animation-reverse");
  }
  function animationForwards(element) {
    element.classList.add("navbar__burger-animation");
  }
  function animationReverse(element) {
    element.classList.add("navbar__burger-animation-reverse");
  }

  const menu = () => {
    lines.forEach(animationReset);

    void lines[0].offsetWidth;

    menuList.classList.toggle("navbar__menu--display");

    if (!menuList.classList.contains("navbar__menu--display")) {
      lines.forEach(animationForwards);
    } else {
      lines.forEach(animationReverse);
    }
  };

  hamb.addEventListener("click", menu);
};

window.onload = () => {
  init();
};
