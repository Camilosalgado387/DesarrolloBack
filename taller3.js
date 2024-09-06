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
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
