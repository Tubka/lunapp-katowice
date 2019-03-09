const hamb = document.querySelector(".navbar__burger");
const menuList = document.querySelector(`.navbar__menu`);

const menu = function () {
  // hamb.classList.toggle('navbar--display');
  menuList.classList.toggle("navbar__menu--display");

  // if (!(menuList.className === 'navbar__menu navbar__menu--display')) {

  //   document.body.style.transition = '0.5s';
  //   document.body.style.backgroundColor = '#555';
  // } else {
  //   document.body.style.backgroundColor = 'transparent';
  // }
};

hamb.addEventListener("click", menu);

console.log(menuList.clientHeight);
// if ()