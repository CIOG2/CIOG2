const top1 = document.getElementById("hamburger-top");
const middle = document.getElementById("hamburger-middle");
const botton = document.getElementById("hamburger-bottom");
let PRESS = true;

function desplegarLista() {

    if(PRESS){
        top1.classList.add('hamburger-top');
        middle.classList.add('hamburger-middle');
        botton.classList.add('hamburger-bottom');
        PRESS = false;
    }
    else{        
        top1.classList.remove('hamburger-top');
        middle.classList.remove('hamburger-middle');
        botton.classList.remove('hamburger-bottom');
        PRESS = true;
    }
}