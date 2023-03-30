// "1. Write a function that takes an integer in minutes and converts it to seconds.
// return the result.

function secondsInMinutes(numMinutes){
    const totalSeconds = numMinutes*60
    return totalSeconds
}

const minutesToSeconds = secondsInMinutes(32)
console.log(minutesToSeconds)

// 2. Write a function that takes an array of numbers and returns the sum of all even numbers.

const arr=[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

function onlyEven() {
    let evenNum=0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 1) { evenNum+=arr[i]
     
    }
  } return evenNum

  
    }


console.log(onlyEven());

// 3. Create a SQL table with your favorite dishes and cuisines.

