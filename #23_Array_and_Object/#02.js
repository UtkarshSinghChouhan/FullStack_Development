const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// 1. Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// 2. Find the median age (middle item or average of two middle items)
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

// 3. Find the average age
const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;

// 4. Find the range of ages
const range = maxAge - minAge;

// 5. Compare the value of (min - average) and (max - average), use abs() method
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Difference between Min and Average:", diffMinAverage);
console.log("Difference between Max and Average:", diffMaxAverage);
