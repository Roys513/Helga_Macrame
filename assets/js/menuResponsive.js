document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".navbar-responsive__button");
    const menuResponsivo = document.querySelector(".navbar-responsive__menu");
    const iconBarras = document.querySelector(".fa-bars");
    const iconX = document.querySelector(".fa-x");

    let menuAbierto = false;

    // --- Al hacer clic en el botón del menú ---
    menuBtn.addEventListener("click", () => {
        menuAbierto = !menuAbierto; // alterna estado

        if (menuAbierto) {
            iconBarras.style.display = "none";
            iconX.style.display = "block";
            menuResponsivo.classList.add("navbar-responsive__menu--active");
            actualizarPosicionMenu(); // ajustar inmediatamente
        } else {
            iconX.style.display = "none";
            iconBarras.style.display = "block";
            menuResponsivo.classList.remove("navbar-responsive__menu--active");
        }
    });

    // --- Cuando se hace scroll ---
    window.addEventListener("scroll", () => {
        if (menuAbierto) {
            actualizarPosicionMenu();
        }
    });

    // --- Función para colocar el menú justo debajo del header actual ---
    function actualizarPosicionMenu() {
        const header = document.querySelector(".header__menu"); // o tu clase de barra
        const rect = header.getBoundingClientRect();
        console.log(rect)
        const alturaHeader = rect.height;
        menuResponsivo.style.top = `${alturaHeader}px`;
    }

    console.log(actualizarPosicionMenu())
});
