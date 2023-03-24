//1. What is the technical term used to create a variable in JavaScript?

  const createVarDef= "Declare"

  console.log(createVarDef)

//2. What is the technical term used to call or execute a function in JavaScript?

const executeFunctionDef= "Invoke"

  console.log(executeFunctionDef)

//3. Create and object called student, including 2 properties with their value.

const studen= {
    nameHeight: "tall",
    hasGlasses: true,
    mileAwayFromSchool: 1
}

//4. Create a function that removes the first element of the array bellow and adds "kiwi" to the end of the array.


const fruitBucket1= [
    "Mango",
    "Lychee",
    "Strawberry",
    "Papaya"

]

function fruitPicker(fruitPlant1, fruit1,fruit2){

  fruitPlant1.shift()
  fruitPlant1.pop()
  fruitPlant1.push(fruit1)
  fruitPlant1.unshift(fruit2)

  return fruitPlant1

}


console.log(fruitPicker(fruitBucket1, "kiwi", "watermelon"))