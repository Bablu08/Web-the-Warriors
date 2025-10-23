export function linearSearch(arr, search){
    let index = 0;
    for(let element of arr.reverse()){
        if(element === search){
            console.log(`Element ${element} found at index ${index}`);
        }
        index++;
    }
    console.log("Element not found");
    // return -1;
}