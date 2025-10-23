// Import all array programs
import { traverseArray } from "./01_traversal.js";
import { reverseArray } from "./02_reverse.js";
import { findLargest } from "./03_largestElement.js";
import { findSmallest } from "./04_smallestElement.js";

import { linearSearch } from "./05_linearSearch.js";


// Sample array for testing
const arr = [45, 12, 89, 33, 22, 78, 56, 90, 11, 67];


// Run each function
console.log("Array Traversal:");
traverseArray(arr);

console.log("\nReversed Array:");
reverseArray(arr);

console.log("\nLargest Element:");
findLargest(arr);

console.log("\nSmallest Element:");
findSmallest(arr);

console.log("\nSmallest Element:");
findSmallest(arr);

console.log("\nLinear Search (find 33):");
linearSearch(arr, 33);