//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable.


//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
let fruits = new Array('apple', 'orange', 'banana')
console.log(fruits)

//? Using array literal
let fruit = ["apple", "orange", "banana"]
console.log(fruit)

//? we can also create an empty array
let arr = []
console.log(arr)
console.log(typeof arr)

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.

let breakFast = ['cookies', 'banana', 'milk']
console.log(breakFast[3])
console.log(breakFast['banana'])

//* ======================================
//*  Modifying Elements:
//* =====================================

//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

let colleges = ['NIT','KIIT','OUTR']
colleges[2] = 'TRIDENT'
console.log(colleges)


//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

let place = ['PURI','KONARK', 'LINGARAJ']
console.log(place)

//? 1: push(): Method that adds one or more elements to the end of an array.

place.push('OLDTOWN')
console.log(place)

//? 2: pop(): Method that removes the last element from an array.

place.pop()
console.log(place)

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

place

//? 4: shift(): Method that removes the first element from an array.



//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

let dept = ['CSE', 'ME', 'ETC', 'CL', 'EL']

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

for(let item of dept){
    console.log(`In NIT the department has ${item}`)
}

for(let item = 0; item < dept.length; item++){
    console.log(dept[item])
}

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

for(let item in dept){
    console.log(`Index ${item} contains ${dept[item]}`)
}

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

