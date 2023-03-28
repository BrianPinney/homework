//1. Create a function that takes in a number of two-pointers 
// (shots made that count as 2 points each) and three-pointers 
// (shots made that count as 3 points each) made and returns a basketball team's total score. 
// Invoke the function and console.log the results.

function score(numTwoPts,numThreePts){
    twoPts= numTwoPts * 2
    threePts= numThreePts * 3
    let result = twoPts + threePts;
    return result;

}
const totalScore = score(40,12)
console.log(totalScore)

// 2. Create 2 mySQL tables for a pet store. 
// Include a table for pets and a table for owners, with at least 3 properties for each.


// 3. Run a query in your terminal to print all of the data in the pets table.