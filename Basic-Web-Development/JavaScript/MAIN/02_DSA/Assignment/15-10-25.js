// 
let student = {
    dept: 'CSE',
    reg: 2421297023,
    sect: 'C',
    year: '3rd'
}

let number = [10,20,30,40,50]
console.log(number)
console.log(number.slice(0,2))

let a = [19, 17, 16, 14, 2222, 21]
for(let item of a){
    if(item % 2 == 0){
        console.log(`${item} is even`)
    } else{
        console.log(`${item} is odd`)
    }
}