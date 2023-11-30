/*si palabra a adivinar = palabra ingresada
      verde
    si no
      gris

recorrer adivinar letra por letra
*/

let palabra = 'APPLE';
let intento = 6;

const BOTON = document.getElementById('guess-button') //boton intentar


BOTON.addEventListener('click', intentar)


function intentar () {
    const GRID = document.getElementById('grid');
    const ROW = document.createElement('row');
    ROW.className = 'row';

    const INPUT2 = document.getElementById("guess-input").value.toUpperCase();
    if (INPUT2 === palabra) {
        console.log('Ganaste!')
        return;
    }

    for (i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter'
        if (palabra[i] === INPUT2[i]) {
            console.log(INPUT2[i], 'verde');
            SPAN.style.backgroundColor = 'green';
            SPAN.innerHTML = INPUT2[i]
        } else if (palabra.includes(INPUT2[i])) {
            console.log(INPUT2[i], 'amarillo')
            SPAN.style.backgroundColor = 'yellow';
            SPAN.innerHTML = INPUT2[i]
        } else {
            console.log(INPUT2[i], 'gris')
            SPAN.style.backgroundColor = 'gray';
            SPAN.innerHTML = INPUT2[i]
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intento = intento - 1;
    if (intento == 0) {
    console.log('perdiste')
    return;
}}
