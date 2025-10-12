document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".contact__form");
    const erroMsg = document.querySelector("#mensajeError");
    const checkMsg = document.querySelector("#mensajeExito");

    form.addEventListener("submit", (e)=>{
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if(!nombre || !email || !mensaje){
            e.preventDefault();
            erroMsg.textContent = "Vaya, algo ha salido mal. Recuerda rellenar todos los campos";
            erroMsg.style.display = "block";
        } else{
            erroMsg.style.display = "none";
            checkMsg.style.display = "block";
        }
    })
})