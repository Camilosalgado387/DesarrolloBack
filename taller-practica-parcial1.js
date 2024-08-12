//punto 1

function contarStrings(lista) {
    let cantidad = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 25) {
            cantidad += 1
        }
    }
    return cantidad
}
let lista = [
    "Este es un string corto",
    "Este es un string que tiene más de veinticinco caracteres",
    "Otro string corto",
    "Un string extremadamente largo que definitivamente tiene más de veinticinco caracteres"
];

//console.log(contarStrings(lista));

//punto 3
function ocurrencias(lista, numero){	
  let ocurrencia = 0
  for(let i = 0; i <= lista.length; i++){
  	if(lista[i] === numero)
  		ocurrencia+= 1
  }
return ocurrencia
}


let lista = [1,1,1,1,2,2,3,3,3,4,4,5,6,7,8] 

//console.log(ocurrencias(lista, 8))


//Punto 4

function fibonacci(n){
  if (n === 0) {
      return 0
  } else if (n === 1) {
      return 1
  }
	return fibonacci(n - 1) + fibonacci(n - 2)
}

//console.log(fibonacci(6))

//Punto 5
//usaremos el metodo 'set' que solo almacena valores unicos en una lista
