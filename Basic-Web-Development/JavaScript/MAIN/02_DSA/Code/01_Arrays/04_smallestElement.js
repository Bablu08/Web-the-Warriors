export function findSmallest(arr){
    let hold = arr[0];
    for(let ptr of arr){
        if(ptr < hold){
            hold = ptr;
        };
    };
    console.log(hold);
};