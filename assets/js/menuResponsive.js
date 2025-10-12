document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".navbar-responsive__button");
    const menuResponsivo = document.querySelector(".navbar-responsive__menu");
    const iconBarras = document.querySelector(".fa-bars");
    const iconX = document.querySelector(".fa-x");

    let menuAbierto = false;

    menuBtn.addEventListener("click", () => {
        menuAbierto = !menuAbierto; 

        if (menuAbierto) {
            iconBarras.style.display = "none";
            iconX.style.display = "block";
            menuResponsivo.classList.add("navbar-responsive__menu--active");
            actualizarPosicionMenu();
        } else {
            iconX.style.display = "none";
            iconBarras.style.display = "block";
            menuResponsivo.classList.remove("navbar-responsive__menu--active");
        }
    });

    window.addEventListener("scroll", () => {
        if (menuAbierto) {
            actualizarPosicionMenu();
        }
    });

    function actualizarPosicionMenu() {
        const header = document.querySelector(".header__menu");
        const rect = header.getBoundingClientRect();
        console.log(rect)
        const alturaHeader = rect.height;
        menuResponsivo.style.top = `${alturaHeader}px`;
    }
});
