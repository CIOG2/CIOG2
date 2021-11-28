let PRESS = true;
const top1 = document.getElementById("hamburger-top");
const middle = document.getElementById("hamburger-middle");
const botton = document.getElementById("hamburger-bottom");
const containerMenu = document.getElementById("container-menu-mobile");
const clase = "container-menu-mobile-listas";
const remove = document.getElementsByClassName(clase).length;
clasesAdd();

function desplegarLista() {
    if(PRESS){
        top1.classList.add('hamburger-top');
        middle.classList.add('hamburger-middle');
        botton.classList.add('hamburger-bottom');
        document.getElementsByClassName("header__nav")[0].style.position = "fixed";
        containerMenu.classList.add("hamburger-opciones");
        clasesRemove();
        PRESS = false;
    }
    else{        
        top1.classList.remove('hamburger-top');
        middle.classList.remove('hamburger-middle');
        botton.classList.remove('hamburger-bottom');
        document.getElementsByClassName("header__nav")[0].style.position = "relative";
        clasesAdd();
        PRESS = true;
    }
}

function clasesRemove() {
    for (let i = 0; i < remove ; i++) {          
        document.getElementsByClassName(clase)[i].classList.remove("hamburger-opciones--desaparecer");
    }   
}

function clasesAdd() {
    for (let i = 0; i < remove ; i++) {          
        document.getElementsByClassName(clase)[i].classList.add("hamburger-opciones--desaparecer");
    }   
}