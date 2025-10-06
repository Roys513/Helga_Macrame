document.addEventListener("DOMContentLoaded", ()=>{
    let barra = document.querySelector(".header__menu");

    
    window.addEventListener("scroll", ()=>{
        let scroll = window.scrollY;
        
        if(scroll > 0){
            barra.classList.add("header__menu--fixed");
        } else{
            barra.classList.remove("header__menu--fixed");
        }
    })
})
