 function toCelsius(f){
    let result = (f - 32) * (5/9)
    return result
 }

 function toFahrenheit(c){
    let result = (c * (9/5)) + 32
    return result 
 }

console.log(`My temp in F is ${toFahrenheit(37.78)} degrees`)
console.log(`My temp in C is ${toCelsius(100)} degrees`)
