//punto 1

function contarStringsLargos(lista) {
    let cantidad = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 25) {
            cantidad += 1;
        }
    }
    return cantidad;
}


let listaStrings = [
    "Este es un string corto",
    "Este es un string que tiene más de veinticinco caracteres",
    "Otro string corto",
    "Un string extremadamente largo que definitivamente tiene más de veinticinco caracteres"
];

console.log(contarStringsLargos(listaStrings));  // Debería imprimir 2
