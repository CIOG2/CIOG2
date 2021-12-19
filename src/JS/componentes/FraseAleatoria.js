import frases from '../Datos/frases.js'


let title = document.getElementById("frase");
let tag = document.getElementById("tag");
let author = document.getElementById("author");
let link = document.getElementById("link");
let socialMedia = document.getElementById("socialMedia");
let recomendacion = document.getElementById("recomendacion");

function fraseAleatoria(frases) {
  let numero = numeroAleatorio(0, frases.length - 1);

  title.innerHTML = `${frases[numero].frase}`;
  tag.innerHTML = `${frases[numero].tag}`;
  link.href = `${frases[numero].socialMedia[1]}`;
  socialMedia.src = redSocial(frases[numero].socialMedia[0]);
  author.innerHTML = `${frases[numero].autor}`;   
  recomendacion.innerHTML = `${frases[numero].recomendacion}`;
}

function redSocial(socialMedia) {
    let red;
    
    switch (socialMedia) {
        case "twiter":
            red = "https://i.ibb.co/cT8S9JJ/twiter.png";
            break;
        case "instagram":
            red = "https://i.ibb.co/W6Ty3yj/instagram.png";
            break;
        case "linkedin":
            red = "https://i.ibb.co/nLxLLtd/linkedin.png";
            break;
        case "tiktok":
            red = "https://i.ibb.co/FKcgvKX/tik-tok.png";
            break;
        case "discord":
            red = "https://i.ibb.co/9rML6wG/discord.png";
            break;
        case "github":
            red = "https://i.ibb.co/1RQsbkg/github.png";
            break;
        default:
            break;
    }
    return red;
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fraseAleatoria(frases);