
//PUNTO 1
function convertidorTemp(c){
	
  return ((c*9)/5) + 32

}

//console.log('La temperatura en fahrenheit es: ' + convertirTemp(32))


//PUNTO 2

function resolvedor(a,b,c, opcion){
    const discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante < 0) {
  	return "solucion compleja";
    }
    if(opcion){
    	return (-b + Math.sqrt(discriminante))/(2*a)
    }else{
    	return (-b - Math.sqrt(discriminante))/(2*a)
    }
}
//true para solucion positiva, false para solucion negativa
//console.log(resolvedor(1, -3, 2, true))

//PUNTO 3
function mejorParidad(n){
  if(n%2 == 0){
  	return console.log("Par")
  }else{
  	return console.log("Impar")
  }
}
//console.log(mejorParidad(1))

//PUNTO 4
function peorParidad(n){
   if (n === 0) {
	return "par"
    } else if (n === 1) {
        return "impar"
    } else if (n === 2) {
        return "par"
    } else if (n === 3) {
        return "impar"
    } else if (n === 4) {
        return "par"
    } else if (n === 5) {
        return "impar"
    } else if (n === 6) {
        return "par"
    } else if (n === 7) {
        return "impar"
    } else if (n === 8) {
        return "par"
    } else if (n === 9) {
        return "impar"
    } else if(n === 10){
        return "par"
    }else{
    	return "numero fuera del rango 0-10"
    
    }
}
//console.log(peorParidad(0))
