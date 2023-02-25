document.addEventListener("DOMContentLoaded",function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    for (let i = 1; i <= 12; i++) {
        const imagenes = document.createElement("picture");
        imagenes.innerHTML = `
        <source srcset="./build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="./build/img/thumb/${i}.webp" type="image/webp">
        <img width="300" height="200" loading="lazy" src="./build/img/thumb/${i}.jpg" alt="imagen de galeria">
        `;
        imagenes.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagenes);
    }
}

function mostrarImagen(id){
    const imagenes = document.createElement("picture");
        imagenes.innerHTML = `
        <source srcset="./build/img/grande/${id}.avif" type="image/avif">
        <source srcset="./build/img/grande/${id}.webp" type="image/webp">
        <img width="300" height="200" loading="lazy" src="./build/img/grande/${id}.jpg" alt="imagen de galeria">
        `;

    //Crear imagen
    const overley = document.createElement("div")
    overley.appendChild(imagenes);
    overley.onclick = function(){
        body.classList.remove("fijar-body")
        overley.remove();
    }
    overley.classList.add("overlay")

    //crear boton cerrar
    const cerrarModal = document.createElement("p");
    cerrarModal.classList.add("btn-cerrar")
    cerrarModal.textContent = "X";
    cerrarModal.onclick = function(){
        body.classList.remove("fijar-body")
        overley.remove();
    }
    overley.appendChild(cerrarModal);

    //agregar overlay al body
    const body = document.querySelector("body")
    body.classList.add("fijar-body")
    body.appendChild(overley)
}

