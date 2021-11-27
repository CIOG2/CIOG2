let HTML = document.getElementById("HTML-Progreso");
let CSS = document.getElementById("CSS-Progreso");
let JS = document.getElementById("JAVASCRIPT-Progreso");
let GIT = document.getElementById("GIT-Progreso");
let REACT = document.getElementById("REACT-Progreso");
let RESPONSIVE = document.getElementById("RESPONSIVE-Progreso");
let habilidades = {
    html : {
        skill : 90,
        variables : [ "giro2-html", "giro3-html", "giro4-html", "numero-html"]
    },
    css : {
        skill : 85,
        variables : [ "giro2-css", "giro3-css", "giro4-css", "numero-css" ]
    },
    javascript : {
        skill : 75,
        variables : [ "giro2-javascript", "giro3-javascript", "giro4-javascript", "numero-javascript" ]
    },
    git : {
        skill : 60,
        variables : [ "giro2-git", "giro3-git", "giro4-git", "numero-git" ]
    },
    react: {
        skill : 30,
        variables : [ "giro2-react", "giro3-react", "giro4-react", "numero-react" ]
    },
    responsive: {
        skill : 80,
        variables : [ "giro2-responsive", "giro3-responsive", "giro4-responsive", "numero-responsive" ]
    },     
}

const observerHTML = new IntersectionObserver(porcentajeHtml, {threshold : 0.59});        
const observerJS = new IntersectionObserver(porcentajeJavascript, {threshold : 0.59});    
const observerCSS = new IntersectionObserver(porcentajeCss, {threshold : 0.59});        
const observerGIT = new IntersectionObserver(porcentajeGit, {threshold : 0.59});
const observerREACT = new IntersectionObserver(porcentajeReact, {threshold : 0.59});    
const observerRESPONSIVE = new IntersectionObserver(porcentajeResponsive, {threshold : 0.59});
observerHTML.observe(HTML);
observerJS.observe(JS);
observerCSS.observe(CSS);
observerGIT.observe(GIT);
observerREACT.observe(REACT);
observerRESPONSIVE.observe(RESPONSIVE);


function porcentaje({skill, variables}) {
    let tiempoAnimacion = 2900 / skill; //2900 milisegundos
    let deg = calcularDeg(skill);

    for (let i = 0; i < (skill + 1); i++) {
        setTimeout(() => {
            document.getElementById(variables[3]).innerHTML = i;
        }, i * tiempoAnimacion);
    }
    document.getElementById(variables[0]).style.transform = "rotate("+ deg[0] +"deg)";
    document.getElementById(variables[1]).style.transform = "rotate("+ deg[1] +"deg)";    
    document.getElementById(variables[2]).style.transform = "rotate("+ deg[2] +"deg)";    
}

// Funcion para calcular el angulo de rotacion para porcentajes mayores a 25%
function calcularDeg(skill) {
    let deg = [];  //Array para guardar los angulos de rotacion
    let degCompletos = (skill - 25) / 25; //veo cuantos angulos completos se necesitan

    while (degCompletos >= 1) {
        deg.push(360);
        degCompletos--;
    }

    if (degCompletos > 0) {
        if (deg[0] != 360) {
            deg.push((((360 - 270) / 25) * (skill - 25 ) + 270));       
            deg.push(180);
            deg.push(90);
                return deg;
        } if (deg[1] != 360) {
            deg.push((((360 - 270) / 25) * (skill - 50 ) + 270));   
            deg.push(90);
            return deg;
        } else {
            deg.push((((360 - 270) / 25) * (skill - 75 ) + 270));
        }    
    }
    if (degCompletos < 0) {
        deg.push(270);
        deg.push(180);
        deg.push(90);
    }
    return deg;
}




function porcentajeHtml(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.html);
        observerHTML.unobserve(HTML);
    }
}
function porcentajeJavascript(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.javascript);
        observerJS.unobserve(JS);
    }
}
function porcentajeCss(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.css);
        observerCSS.unobserve(CSS);
    }
}
function porcentajeGit(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.git);
        observerGIT.unobserve(GIT);
    }
}
function porcentajeReact(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.react);
        observerREACT.unobserve(REACT);
    }
}
function porcentajeResponsive(dato) {
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 0.55) {
        porcentaje(habilidades.responsive);
        observerRESPONSIVE.unobserve(RESPONSIVE);
    }
}