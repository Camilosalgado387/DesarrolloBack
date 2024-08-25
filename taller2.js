//Punto 1
function findMax(lista){

	let mayor = lista[0]
  for (let i = 0; i<lista.length; i++){
  
  	if(lista[i] > mayor){
    mayor = lista[i]
    }
  }
  return mayor
}

//Punto 2
function includes(lista,valor){
	for(let i= 0; i<lista.length; i++){
  	if(lista[i] === valor){
    	return true
    }
  
  }	
	return false
}

//Punto 3
function sum(lista){
	let suma = 0
	for(let i = 0; i<lista.length; i++){
    suma += lista[i]
  }
	return suma
}

//Punto 4 

function  missingNumbers(lista){
	let faltantes = []
  lista.sort((a, b) => a - b)
  for(let i = lista[0]; i < lista[lista.length-1];i++){
  	if(!lista.includes(i)){
    	faltantes.push(i)
    }
  }
  return faltantes
}
