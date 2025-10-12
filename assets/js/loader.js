window.addEventListener("load", ()=>{
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");

    setTimeout(()=>{
        document.classList.add("page-loaded")
    }, 500)
});