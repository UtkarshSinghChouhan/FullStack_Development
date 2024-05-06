function customIncludes(arr, targetValue, fromIndex = 0) {
    // Handling invalid input
    if (!Array.isArray(arr)) {
      throw new TypeError("'arr' must be an array");
    }
  
    // Looping through the array starting from the specified index
    for (let i = fromIndex; i < arr.length; i++) {

      // Strict equality check (===)
      if (arr[i] === targetValue) {
        return true;
      }
    }
    // Not found
    return false;
}
  
const numbers = [1, 2, 3, 4, 5];

if (customIncludes(numbers, 3)) {
  console.log("The number 3 is present in the array.");
} else {
  console.log("The number 3 is not present in the array.");
}

// Output: The number 3 is present in the array.

const fruits = ["apple", "banana", "orange"];

if (customIncludes(fruits, "mango", 1)) { // Start search from index 1
  console.log("The fruit 'mango' is present in the array (from index 1).");
} else {
  console.log("The fruit 'mango' is not present in the array (from index 1).");
}

// Output: The fruit 'mango' is not present in the array (from index 1).
