const toggleNavbar = () => {
  const isActiveClassName = "is-active";
  const navbarElementId = "navbar";
  const navbarBurgerElementId = "navbar-burger";

  const navbarElement = document.getElementById(navbarElementId);
  const navbarBurgerElement = document.getElementById(navbarBurgerElementId);
  const isActive = navbarElement.classList.contains(isActiveClassName);

  if (!isActive) {
    navbarElement.classList.add(isActiveClassName);
    navbarBurgerElement.classList.add(isActiveClassName);
  } else {
    navbarElement.classList.remove(isActiveClassName);
    navbarBurgerElement.classList.remove(isActiveClassName);
  }
};

document.getElementById("navbar-burger").onclick = toggleNavbar;
