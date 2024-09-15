const hamburguerMenu = document.querySelector(".menu-button");
const logo = document.querySelector(".logo");
const mobileNav = document.querySelector(".mobile-menu")
const buttonImg = document.querySelector(".menu-button > img")
let isMenuShown = false;

hamburguerMenu.addEventListener("click", () => {
  if (!isMenuShown){
    logo.classList.add("hide");
    mobileNav.style.display = "flex";
    buttonImg.src = "/images/close.svg"
    isMenuShown = !isMenuShown;
  } else {
    logo.classList.remove("hide");
    mobileNav.style.display = "none";
    buttonImg.src = "/images/menu-icon.svg"
    isMenuShown = !isMenuShown;
  }
})