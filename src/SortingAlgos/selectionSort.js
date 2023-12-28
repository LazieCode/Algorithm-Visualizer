export function selection(arr, animations={}) {
    let count = 0;
    for(let i = 0; i< arr.length - 1; i++){
        for(let j = i + 1; j< arr.length; j++){
            animations[count++] = [i, j];
            if(arr[i] > arr[j]){
                let k = arr[i];
                arr[i] = arr[j];
                arr[j] = k; 
            }
        }
    }
    return {
        sortedArray: arr,
        animations: animations
    };
} 