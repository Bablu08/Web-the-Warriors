// Print alternative elements
// let arr = [48, 12, 66, 68, 0o1]
// // output = 48, 66, 0o1
// let index = 0
// for(let num of arr){
//     if(index % 2 == 0){
//         console.log(num)
//     }
//     index++
// }

// LINEAR SEARCH
let arr = [15, 25, 26, 45, 66, 78, 11]
// find: 78, 10

let key = 78
let found = false

for(let num in arr){
    if(arr[num] === key){
        console.log(`Element ${key} found at index ${num}`)
        found = true
        break
    }
}

if (!found) {
  console.log(`Element ${key} not found`);
}

// FIND THE GRATEST ELEMENT (4891)
arr = [10, 20, 4, 556, 4891, 1, 12, 46]

let hold = arr[0]
var ptr
for(ptr of arr){
    if(ptr > hold){
        hold = ptr
    }
}
console.log(hold)

// FIND THE SMALLEST ELEMENT (1)
hold = arr[0]
for(ptr of arr){
    if(ptr < hold){
        hold = ptr
    }
}
console.log(hold)

// REVERSE THE ARRAY
// let reversed = []
for(ptr in arr.reverse()){
    console.log(`index ${ptr} contain ${arr[ptr]}`)
}