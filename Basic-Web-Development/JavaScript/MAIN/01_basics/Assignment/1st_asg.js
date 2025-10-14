// WAP TO PRINT "TRUE" IF A NUMBER IS ONLY DIVISIBLE BY 3 AND 5 BUT NOT 10.

let num = 50
if(num % 3 == 0 && num % 5 == 0 && num % 10 != 0){
    console.log("TRUE")
}

// SWAP THE VALUES OF TWO VARIABLES WITHOUT USING THIRDONE

// let num1 = 10
// let num2 = 20

// [num1,num2] = [num2,num1]
// console.log(num1,num2)

// PRINT ALL EVENT NUMBER FROM 1 TO 49 USING FOR LOOP

let i = 1
for(i; i<=49; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// WRITE A FUNCTION isprime() WHICH WILL RETURN "TRUE" IF THE NUMBER IS PRIME.

// const isprime = (n) => {
//     if(num < 2) return false

// }


// WRITE A FUNCTION WHICH WILL COUNT HOW MANY TIMES IT HAS BEEN CALLED

const createCounter = () =>{
    let count = 0;

    return function(){
        count++
        console.log(`function called ${count} times`)
        return count
    }
}
const counter = createCounter()

counter()
counter()
counter()

// WRITE A FUNCTION TO COUNT VOWELS IN A WORD


// STORE AND PRINT ADDRESS 

// a:1, b:2 | b:2,c:3 | c:5, d:6

// let a=1, b=2, c=3


// 
let store = []
for(let i = 99; i >= 1; i--){
    if(i % 2 != 0){
        store.push(i)
    }
}
console.log(store)