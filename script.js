let vector = ['programando' , 'paraguay', 'otro', 'otro2' , 'otro3' ]

console.log('esto es una lista', vector[vector.length - 3])
/*comparar(1, 2, 3);

console.log('funciona x')

function comparar (n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        console.log('Es mayor ', n1)
    } else if (n2 >= n1 && n2 >= n3) {
        console.log('Es mayor ',n2)
    } else if (n3 > n1 && n3 > n2) {
        console.log('Es mayor ',n3)
    }
}


function suma(x,y){
    let resultado = x + y;
    return resultado
}

let multiplicación = suma(4, 1) *  2;

console.log(multiplicación);

function resta (x,y){
    return x + y
}

console.log(resta (2, 1) * 2)


setTimeout(function() {
    console.log('Han transcurrido 3 segundos');
  }, 3000);


function domingo (n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else {
        return n2;
    } else {
        return n3;
    }
} 

console.log(domingo (111, 23, 15) *2);

 /*let peso = 35

if (peso <= 30) {
    console.log('este es Holliday', Holliday(valor))
} else {
    console.log('este es superficie', superficie(peso))
}


function Holliday(peso) {
    let resultado;
    if (peso > 20) {
        resultado = ((peso - 20) * 20) + 1500
    } else if (peso < 20 && peso > 10) {
        resultado = ((peso - 10) * 50) + 1000
    } else {
        resultado = peso * 100
    }
    return resultado
}


 /*Superficie corporal = ( (peso * 4) + 7) / (peso + 90)

    function superficie(peso) {
        let aux = (((peso *4) + 7) / (peso + 90))
        let resultado1  = aux * 1500
        let resultado2  = aux * 2000
        return [resultado1, resultado2
        }*/

