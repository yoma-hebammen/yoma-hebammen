const toggleNavbar = () => {
  const isActiveClassName = "is-active";
  const navbarElementId = "navbar";
  const navbarBurgerElementId = "navbar-burger";

  const bodyElements = document.getElementsByTagName("body");
  const navbarElement = document.getElementById(navbarElementId);
  const navbarBurgerElement = document.getElementById(navbarBurgerElementId);
  const isActive = navbarElement.classList.contains(isActiveClassName);

  if (!isActive) {
    navbarElement.classList.add(isActiveClassName);
    navbarBurgerElement.classList.add(isActiveClassName);
    bodyElements.item(0).style.overflow = "hidden";
  } else {
    navbarElement.classList.remove(isActiveClassName);
    navbarBurgerElement.classList.remove(isActiveClassName);
    bodyElements.item(0).style.removeProperty("overflow");
  }
};

document.getElementById("navbar-burger").onclick = toggleNavbar;
