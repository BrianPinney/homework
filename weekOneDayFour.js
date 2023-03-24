//1. What is the technical term used to create a variable in JavaScript?

// Answer: Declare

//2. What is the technical term used to call or execute a function in JavaScript?

//Answer: Invoke

//3. Create and object called student, including 2 properties with their value.

const studen= {
    nameHeight: "tall",
    hasGlasses: true,
    mileAwayFromSchool: 1
}

//4. Create a function that removes the first element of the array bellow and adds "kiwi" to the end of the array.


const fruitBucket= [
    "mango",
    "Lychee",
    "strawberry",
    "Papaya"

]
function fruitPicker(){
    fruitBucket.shift()
    fruitBucket.push("kiwi")  
     return fruitBucket
}
    
console.log(fruitPicker())
console.log(fruitBucket)