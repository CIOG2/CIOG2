const data = [1,2]

const root = document.getElementById('root');

const proyects = [];

data.map(({})  =>{
    
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
    const title = document.createElement('h2');
    title.classList.add('proyect__title');
    title.textContent = 'Clon de instagram';




    const pageLink = document.createElement('a');
    pageLink.classList.add('button__link--style');
    pageLink.textContent = 'Repositorio GitHub';

    const gitRepoLink = document.createElement('a');
    gitRepoLink.classList.add('button__link--style');
    gitRepoLink.textContent = 'Link Pagina';


    const containerButtonsLinks = document.createElement('div')
    containerButtonsLinks.classList.add('container__button--link')
    containerButtonsLinks.append( pageLink, gitRepoLink );


    const proyectText = document.createElement('div');
    proyectText.classList.add('container__proyect--text');
    proyectText.append( title, containerButtonsLinks );



    const proyect = document.createElement('div');
    proyect.classList.add('container__proyect')   
    proyect.append( proyectImage, proyectText );



    proyects.push(proyect);
});

root.append(...proyects);