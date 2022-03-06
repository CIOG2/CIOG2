import data from '../Datos/proyectos.js';

const root = document.getElementById('root');

const proyects = [];

data.map(({ title, description, images, gitHubLink, paginaLink })  =>{
    
    const arrowLeft = document.createElement('img')
    arrowLeft.src = 'https://i.ibb.co/C5fJ8g7/flecha.png'
    const leftControlImage = document.createElement('div');
    leftControlImage.classList.add('left__control--image');    
    leftControlImage.append(arrowLeft);

    const containerImages = document.createElement('div');
    containerImages.classList.add('container__images');
    
    const arrowRight = document.createElement('img')
    arrowRight.src = 'https://i.ibb.co/C5fJ8g7/flecha.png'
    const rightControlImage = document.createElement('div');
    rightControlImage.classList.add('right__control--image');
    rightControlImage.append(arrowRight);


    const proyectImage = document.createElement('div');
    proyectImage.classList.add('container__proyect--image');
    proyectImage.append( leftControlImage, containerImages, rightControlImage );

//------------------------------------------------------------------
    const titleText = document.createElement('h2');
    titleText.classList.add('proyect__title');
    titleText.textContent = title;




    const pageLink = document.createElement('a');
    pageLink.classList.add('button__link--style');
    pageLink.textContent = 'Repositorio GitHub';
    pageLink.target = '_blank';
    pageLink.href = gitHubLink;

    const gitRepoLink = document.createElement('a');
    gitRepoLink.classList.add('button__link--style');
    gitRepoLink.textContent = 'Link Pagina';
    gitRepoLink.target = '_blank';
    gitRepoLink.href = paginaLink;

    const containerButtonsLinks = document.createElement('div')
    containerButtonsLinks.classList.add('container__button--link')
    containerButtonsLinks.append( pageLink, gitRepoLink );


    const proyectText = document.createElement('div');
    proyectText.classList.add('container__proyect--text');
    proyectText.append( titleText, containerButtonsLinks );



    const proyect = document.createElement('div');
    proyect.classList.add('container__proyect')   
    proyect.append( proyectImage, proyectText );



    proyects.push(proyect);
});

root.append(...proyects);