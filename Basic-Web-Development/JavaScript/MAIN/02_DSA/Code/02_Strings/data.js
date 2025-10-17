// # ← contains master string
//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

let str = "Hello World!"
console.log(str.length)

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

let text = "My name is \"Rajkishore\" & I am a full stack developer."
console.log(text)

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods

//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// syntax
// indexOf(searchString)
// indexOf(searchString, position)

text = "Rajkishore Behera"
console.log(text.indexOf("Raj"))


//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

text = "I joined in \"MERN STACK\" course because \"MERN STACK\" is a best course."
console.log(text)

let index = text.indexOf('MERN')
console.log(`The result of indexOf is ${index}`)

index = text.lastIndexOf('MERN')
console.log(`The result of lastIndexOf is ${index}`)


//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

text = "Hello javaScript!"

index = text.search(/javascript/i)
console.log(index)


//? match() : Returns an array of the matched values or null if no match is found.

// without the g flag
index = text.match(/Javascript/i)
console.log(index)

index = text.match(/Javascript/gi)
console.log(index)


//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

text = "Hello JavaScript, welcome to our world best JavaScript course";

index = text.matchAll("javascript")
console.log(index)

index = text.matchAll("JavaScript")
console.log(index)

index = text.includes('Java')
console.log(index)

index = text.includes("J")
console.log(index)


//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:

text = "Hello JavaScript, welcome to our world best JavaScript course"

index = text.startsWith("welcome", 18)
console.log(index)

index = text.startsWith("Hello")
console.log(index)


//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

index = text.endsWith("welcome")
console.log(index)

index = text.endsWith("course")
console.log(index)


//* =========================================
//* Extracting String Parts:
//* =========================================
