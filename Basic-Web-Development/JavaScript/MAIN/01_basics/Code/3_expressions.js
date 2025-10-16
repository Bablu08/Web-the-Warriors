//* ===================================
//*  EXPRESSIONS AND OPERATORS Section
//* ====================================

//* --------------------------------- \\
//* 1: Assignment operators
//* --------------------------------- //

let myNum = 24
let channelName = 'technical guruji'

//* --------------------------------- \\
//* 2: Arithmetic operators
//* --------------------------------- //

//? Addition (+): Adds two values or variables.
let x = 10, y = 20, sum
sum = x + y
console.log(sum)

//? Subtraction (-): Subtracts the right operand from the left operand.
x = 20, y = 10
let min = x - y
console.log(min)

//? Multiplication (*): Multiplies two values or variables.
x = 5, y =5
let mul = x * y

//? Division (/): Divides the left operand by the right operand.
x = 50, y = 5
let div = x / y
console.log(div)

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
x = 50, y = 10
let mod = x / y
console.log(mod)

//* --------------------------------- \\
//* 3: String Operators
//* --------------------------------- //

let str1 = 'Hello', str2 = 'World', str3
str3 = str1 + " " + str2
console.log(str3)

//* --------------------------------- \\
//* 4: comparison operators
//* --------------------------------- //

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
if(5 == 10-5){
    console.log(true)
}else{
    console.log(false)
}

//? Strict Equal (===):
if(5 === "5"){
    console.log(true)
}else{
    console.log(false)
}

//? Not Equal (!=   👉 ! =):
if(5 != 5){
    console.log(false)
}else{
    console.log(true)
}

//? Greater Than (>):
if(5 > 5){
    console.log(false)
}else{
    console.log(false)
}

//? Less Than (<):
if(5 < 5){
    console.log(false)
}else{
    console.log(false)
}