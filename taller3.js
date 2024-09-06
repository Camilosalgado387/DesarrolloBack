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
function twoSum(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
    
}
//Punto 3
