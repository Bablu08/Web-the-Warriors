//* ======================================
//* Introduction to Stack
//* =====================================

//* Definition: A Stack is a linear data structure that follows the LIFO principle — Last In, First Out.

//* Think of it like a stack of plates: You can only add (push) a plate on top. & You can only remove (pop) a plate from the top.

/* 🧩 Common Stack Operations - 
push(element) - Adds an element to the top of the stack

1. pop() - Removes the top element

2. peek() or top() - Returns the top element without removing it

3. isEmpty() - Checks if the stack is empty

4. size() - Returns the total number of elements

*/

let arr = new Array(5)
console.log(arr.length)

arr.push(5)
console.log(arr.length)

console.log(arr)

for(let ptr of arr){
    console.log(ptr)
}

arr[0] = 10
console.log(arr)

arr[3] = 35
console.log(arr)

arr[2] = 20
console.log(arr)

for(let ptr of arr){
    console.log(ptr)
}

arr[1] = 15
console.log(arr)

arr[4] = 40
console.log(arr)

// --------------------------------- \\
// 2. peek() or top()
// --------------------------------- //

console.log('use of peek() or top() method')

console.log(arr.top())