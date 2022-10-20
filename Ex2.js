let array = process.argv
let suma = 0

for(i = 2; i < array.length; i++){
    suma += Number(array[i])
}

console.log(suma)