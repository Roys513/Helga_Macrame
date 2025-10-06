document.addEventListener("DOMContentLoaded", ()=>{
    const botonSubmenu = document.querySelectorAll(".submenu__title");
    
    botonSubmenu.forEach(boton => {
        const menuSubmenu = boton.querySelector(".submenu__new-submenu");

        if(menuSubmenu){ 
            boton.addEventListener("click", ()=>{
            let opcionesSubmenu = boton.querySelector(".submenu__new-submenu--click")

            if(!opcionesSubmenu){
                menuSubmenu.classList.add("submenu__new-submenu--click")
            } else{
                menuSubmenu.classList.remove("submenu__new-submenu--click")
            }
    });
}
})
})