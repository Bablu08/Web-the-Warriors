export function findLargest(arr){
    let hold = arr[0];
    var ptr;
    for(let ptr of arr){
        if(ptr > hold){
            hold = ptr
        }
    };
    console.log(hold);
}