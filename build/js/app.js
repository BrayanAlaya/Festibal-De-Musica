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
        galeria.appendChild(imagenes);
    }
}
