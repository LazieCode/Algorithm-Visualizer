export function bubble(arr, animations={}) {
    let count = 0;
    for(let i = 0; i< arr.length - 1; i++){
        for(let j = 0; j< arr.length - 1; j++){
            animations[count++] = [j, j + 1];
            if(arr[j] > arr[j + 1]){
                let k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k; 
            }
        }
    }
    return {
        sortedArray: arr,
        animations: animations
    };
}