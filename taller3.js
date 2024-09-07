//punto 1

function desglosarString(string, tipo) {
    let vocales = "aeiou"
    let consonantes = "bcdfghjklmnpqrstvwxyz"
    if(tipo === "vocales"){
        return string.split('').filter(letra => vocales.includes(letra)).length
    }else if(tipo === "consonantes"){
        return string.split('').filter(letra => consonantes.includes(letra)).length
    }
}


//Punto 2   
function twoSum(lista, numero) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if (lista[i] + lista[j] === numero) {
                resultado.push(i)
                resultado.push(j)
            }
        }
    }
    return resultado
}
    
//Punto 3
function conversionRomana(romano) {
    const dicRomano = {I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000}
    let arabiga = 0
    for (let i = 0; i < romano.length; i++) {
        const dicActual = romano[i]
        const dicSiguiente = romano[i + 1]
        if (dicRomano[dicActual] < dicRomano[dicSiguiente]) {
            arabiga -= dicRomano[dicActual]
        } else {
            arabiga += dicRomano[dicActual]
        }
    }
    return arabiga
}
