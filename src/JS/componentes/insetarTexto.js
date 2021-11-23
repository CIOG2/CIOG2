let llaveApertura = document.getElementById("ETIQUETA-1");
let llaveCierre = document.getElementById("ETIQUETA-2");
let texto1 = document.getElementById("ETIQUETA-3");
let texto2 = document.getElementById("ETIQUETA-4");
let texto3 = document.getElementById("ETIQUETA-5");
let texto4 = document.getElementById("ETIQUETA-6");
let llaveApertura2 = document.getElementById("ETIQUETA-7");
let llaveCierre2 = document.getElementById("ETIQUETA-8");
let valor = 0;

let texto = {
    llaveApertura: '<',
    llaveCierre: 'h1>',
    texto1: 'Si se puede',
    texto2: 'imaginar',
    texto3: ', se puede',
    texto4: 'programar.',
    llaveApertura2: '<',
    llaveCierre2: '/h1>',
} 

function insetarElTexto(POSICION,T,valor,ultimo) {
    for (let i = 0; i < T.length; i++) {
        setTimeout(function () {
            POSICION.innerHTML += T[i];
        }, valor * 100);
        if (T[i] == ' ') {
            valor = valor;
        } else {
            valor += 1;
        }
    }    
    return valor
}

valor = insetarElTexto(llaveApertura,texto.llaveApertura,valor);
valor = insetarElTexto(llaveCierre,texto.llaveCierre,valor);
valor = insetarElTexto(texto1,texto.texto1,valor);
valor = insetarElTexto(texto2,texto.texto2,valor);
valor = insetarElTexto(texto3,texto.texto3,valor);
valor = insetarElTexto(texto4,texto.texto4,valor);
valor = insetarElTexto(llaveApertura2,texto.llaveApertura2,valor);
valor = insetarElTexto(llaveCierre2,texto.llaveCierre2,valor);
