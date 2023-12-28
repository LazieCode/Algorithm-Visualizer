export function quickSort(arr, animations = {}) {

    if(arr.length <= 1){
        return;
    }

    qSort(arr, animations, 0, arr.length - 1);

    return {
        sortedArray: arr,
        animations: animations
    };
}

function qSort(arr, animations, low, high){

    if(low< high){
        let pivot = findPivot(arr, animations, low, high);
        qSort(arr, animations, low, pivot - 1);
        qSort(arr, animations, pivot + 1, high);
    }
}

function findPivot(arr, animation, low, high) {

    let pivot = arr[low];
    let i = low;
    let j = high;
    
    while(i< j){
        while(arr[i]<= pivot && i<= high - 1){
            // animation[Object.keys(animation).length + 1] = [i, low];
            i++;
        }
        while(arr[j]> pivot && j>= low + 1){
            // animation[Object.keys(animation).length + 1] = [low, j];
            j--;
        }

        if(i< j){
            animation[Object.keys(animation).length + 1] = [i, j];
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    animation[Object.keys(animation).length + 1] = [low, j];
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;

}