/*si palabra a adivinar = palabra ingresada
      verde
    si no
      gris

recorrer adivinar letra por letra
*/

let diccionario = ['ACTOR', 'AVION', 'CAMPO', 'NUBES']
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)]; //para que eliga una palabra random. Cada que comience de nuevo el juego eligirá una nueva palabra de la lista.
let intento = 6;

const BOTON = document.getElementById('guess-button') //boton intentar


BOTON.addEventListener('click', intentar)


function intentar () {
    const GRID = document.getElementById('grid');
    const ROW = document.createElement('div'); //estamos creando un div sin necesidad de poner en html
    ROW.className = 'row'; //

    const INPUT2 = document.getElementById("guess-input").value.toUpperCase();
    if (INPUT2 === palabra) {
        terminar("<h1>GANASTE!</h1>")
        console.log('GANASTE!')
        return;
    }

    for (i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter'
        if (palabra[i] === INPUT2[i]) {
            console.log(INPUT2[i], 'verde');
            SPAN.style.backgroundColor = '#79b851';

            SPAN.innerHTML = INPUT2[i]
        } else if (palabra.includes(INPUT2[i])) {
            console.log(INPUT2[i], 'amarillo')
            SPAN.style.backgroundColor = '#f3c237';

            SPAN.innerHTML = INPUT2[i]
        } else {
            console.log(INPUT2[i], 'gris')
            SPAN.style.backgroundColor = '#a4aec4';

            SPAN.innerHTML = INPUT2[i]
        }
        ROW.appendChild(SPAN) //row es hijo de span
    }
    GRID.appendChild(ROW) //grid es hijo de row
    intento--
    if (intento == 0) {
    console.log('PERDISTE!')
    terminar("<h1>PERDISTE!</h1>")
    return;
}}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}