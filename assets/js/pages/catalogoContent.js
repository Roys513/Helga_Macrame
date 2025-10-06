document.addEventListener("DOMContentLoaded", ()=>{
    const contenedorCatalogo = document.querySelector(".catalog__content");
    const ventanaDetalles = document.querySelector(".content__item-detail");
    const cardVentanaDetalles = document.querySelector(".item-detail__container");

// ARRAY DE OBJETOS CON PRODUCTOS
    let productos = [
        {
            id: 1,
            titulo: "Macramito",
            precio: parseInt(20),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 10-8-2025,
        },

        {
            id: 2,
            titulo: "Macramito",
            precio: parseInt(30),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 10-9-2025,
        },

        {
            id: 3,
            titulo: "Macramito",
            precio: parseInt(10),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 13-8-2025,
        },

        {
            id: 4,
            titulo: "Macramito",
            precio: parseInt(15),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 10-6-2025,
        },

        {
            id: 5,
            titulo: "Macramito",
            precio: parseInt(20),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 10-9-2025,
        },

        {
            id: 6,
            titulo: "Macramito",
            precio: parseInt(20),
            descripcion: "Lo último del buen marcramé",
            img: "../img/fr_17313.jpg",
            fecha: 5-8-2025,
        },

        {
            id: 7,
            titulo: "Meu amorchitu",
            precio: parseInt(30),
            descripcion: "Texto de prueba",
            img: "../img/fr_17315.jpg",
            fecha: 10-8-2025,
        },

        {
            id: 8,
            titulo: "Bolso Conchita",
            precio: parseInt(30),
            descripcion: "Bolso hecho a mano con técnica de macramé. Es diferente y, ¡seguro que te complementa con un look ideal! para un evento, una fiesta o un regalo para alguien especial. Personaliza el color y regala algo único ya que cada bolso se hace bajo previa petición del cliente",
            img: "../img/Macrame_bolso.jpg",
            fecha: 23-8-2025,
        },

        {
            id: 9,
            titulo: "Novios",
            precio: parseInt(30),
            descripcion: "Se puede personalizar todo: desde el color de la ropita hasta la forma y el tamaño del marco. Se hace bajo petición, lo que los hace únicos y hechos con mucho cariño",
            img: "../img/Macrame_novios.jpg",
            fecha: 30-9-2025,
        },
    ]

// CREACION DE CARDS EN EL DOM
    function agregarProducto(){

        productos.forEach(producto => {
            const card = document.createElement("article");
            card.classList.add("content__catalog-item");
            card.id = `card${producto.id}`;

            card.innerHTML=`
            <div class="catalog-item__container-img">
                <img src="${producto.img}" alt="Imagen de producto" class="catalog-item__img">
                <span class="catalog-item__item-text">Ver detalles</span>
            </div>
            
            <div class="catalog-item__info-item">
                <h2 class="info-item__title">${producto.titulo}</h2>
                <span class="info-item__price">${producto.precio}€</span>
            </div>
            `

            card.addEventListener("click", ()=>{
                mostrarDetalles(producto);
            })
            
            contenedorCatalogo.appendChild(card);
        })        
    }
    agregarProducto();

// PAGINADOR
    const productosPorPagina = 15;
    let paginaActual = 1;

    function mostrarInfo(){
        const total = productos.length;
        const inicio = (paginaActual - 1) * productosPorPagina + 1;
        let fin = paginaActual * productosPorPagina;
        if(fin > total){
            fin = total
        };

        const info = document.querySelector(".menu__text-quantity");
        info.textContent = `Mostrando ${inicio} - ${fin} de ${total} productos`;
    }
    mostrarInfo();

//BOTON DE FILTRADO
    const botonFiltro = document.querySelector(".menu__filter-dropdown");
    const menuFiltro = document.querySelector(".filter-dropdown__list");

    botonFiltro.addEventListener("click", ()=>{
        menuFiltro.classList.toggle("filter-dropdown__list--active");
    })

// OPCIONES DE FILTRADO
    const opcionPrecioMasAlto = document.querySelector("#FDOPrecioMasAlto");
    const opcionPrecioMasBajo = document.querySelector("#FDOPrecioMasBajo");
    const masReciente = document.querySelector("#FDOMasReciente");
    const menosReciente = document.querySelector("#FDOMenosReciente"); 
    
    opcionPrecioMasAlto.addEventListener("click", ()=>{
        productos.sort((a, b) =>{
            return a.precio - b.precio;
        })
        
        contenedorCatalogo.innerHTML="";

        agregarProducto();
    })
    
    opcionPrecioMasBajo.addEventListener("click", ()=>{
        productos.sort((a, b) =>{
            return b.precio - a.precio;
        })
        
        contenedorCatalogo.innerHTML="";

        agregarProducto();
    })

    masReciente.addEventListener("click", ()=>{
        productos.sort((a, b) =>{
            return a.fecha - b.fecha;
        })

        contenedorCatalogo.innerHTML = "";

        agregarProducto();
    })

    menosReciente.addEventListener("click", ()=>{
        productos.sort((a, b) =>{
            return b.fecha - a.fecha
        });

        contenedorCatalogo.innerHTML = "";

        agregarProducto();
    })

    const opcionesFiltrado = document.querySelectorAll(".filter-dropdown__option");

    opcionesFiltrado.forEach(opcion =>{
        opcion.addEventListener("click", ()=>{
            menuFiltro.classList.remove("filter-dropdown__list--active");
        })
    })

// VENTANA DE DETALLE DE PRODUCTO
    function mostrarDetalles(producto){
        ventanaDetalles.innerHTML = `
        <div class="item-detail__container">
            <article class="item-detail__grid">
                <i class="item-detail__icon-x fa-solid fa-x"></i>
                <div class="item-detail__container-img">
                    <img src="${producto.img}" alt="Imagen de producto" class="item-detail__img">
                </div>

                <div class="item-detail__info">
                    <div class="item-detail__text">
                        <h2 class="item-detail__title">${producto.titulo}</h2>
                        <p class="item-detail__description">${producto.descripcion}</p>
                    </div>

                    <span class="item-detail__price">${producto.precio}€</span>
                </div>
            </article>
        </div>
        `

        ventanaDetalles.classList.add("content__item-detail--active");
                
                const botonX = ventanaDetalles.querySelector(".item-detail__icon-x");
                                
                botonX.addEventListener("click", ()=>{
                    ventanaDetalles.classList.remove("content__item-detail--active");                    
                })

                    ventanaDetalles.addEventListener("click", (e)=>{
                        if(e.target === ventanaDetalles || e.target === cardVentanaDetalles){
                            ventanaDetalles.classList.remove("content__item-detail--active");
                        }
                    })
    }
})