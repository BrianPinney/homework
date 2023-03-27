// //1. You are given the following "car" object:
//  let myCar = {brand: "Toyota", make: "Prius", color: "red"}. 
//  Please use destructuring to access the color property.

let myCar = {
    brand: "Toyota", 
    make: "Prius", 
    color: "red"
}
const {brand,make,color} = myCar
console.log(myCar)
console.log(brand,make,color)
 
// 2. Write a function that converts hours into seconds. Return the result.
//  Invoke the function.

function secondsInHours (hours){
    const minutes= hours*60
    const seconds= minutes*60
    return seconds

}

const totalSeconds = secondsInHours(8)
console.log(totalSeconds)