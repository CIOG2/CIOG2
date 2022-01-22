import articulos from '../Datos/articulos.js';

const recentContainer = document.getElementById('noticia-mas-reciente');
const container = document.getElementById('container-articulos');

if (articulos.length <= 0 || articulos.length === 1) {
    document.getElementsByClassName('ultimos__blogpost')[0].style.display = "none";
}

if(articulos.length >= 1){
    recentContainer.innerHTML = `
        <div class="contenedor-article flex">
            <article class="article-container flex4">
            <div class="noText-container flex2">
                <h2 class="article-title">Mas Reciente</h2>
                <img src="${articulos[0].image}" alt="${articulos[0].description}" />
            </div>
            <div class="note-container">
                <div class="text-container">
                <h3>${articulos[0].title}</h3>
                <p>${articulos[0].subtitle}</p>
                </div>
                <div class="noText-container flex2">
                <a href="${articulos[0].link}" class="flex">Ver Mas <span></span></a>
                </div>
            </div>
            </article>
        </div>
    `
}


articulos.slice(1).map(articulo => {
    const article = `
    <article class="article__container">
        <div class="article__container--elements">
            <img class="container--element-image" src="${articulo.image}" alt="${articulo.description}">
            <div class="container--element-text">
                <h2>${articulo.title}</h2>
                <p>${articulo.subtitle}</p>
            </div>
            <a href="${articulo.link}" class="container--element-read-more" >Leer mas</a>         
        </div>
    </article>
    `;
    container.innerHTML += article;
});