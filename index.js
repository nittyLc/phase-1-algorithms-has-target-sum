// function hasTargetSum(array, target) {
//   // Write your algorithm here
// }

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  // Use a Set to store numbers we've seen so far
  const seenNumbers = new Set();

  for (const number of array) {
    // Calculate the complement that would add up to the target
    const complement = target - number;

    // Check if the complement exists in the Set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the Set
    seenNumbers.add(number);
  }

  // If no such pair is found, return false
  return false;
}

module.exports = hasTargetSum;

