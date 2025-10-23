export function linearSearch(arr, search){
    let found = false; // track if found
    let index = 0;
    for(let element of arr.reverse()){
        if(element === search){
            console.log(`Element ${element} found at index ${index}`);
            found = true; // mark as found
            break; // stop searching after found
        }
        index++;
    }
    
    if(!found){
        console.log("Element not found");
    }
}