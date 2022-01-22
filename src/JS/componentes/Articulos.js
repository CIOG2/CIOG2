import articulos from '../Datos/articulos.js';

const container = document.getElementById('container-articulos');

articulos.map(articulo => {
    const article = `
        <article class="">
            <img src="${articulo.Image}" alt="">
            <h2>${articulo.title}</h2>
            <p>${articulo.subtitle}</p>
        </article>
    `;
    container.innerHTML += article;
});