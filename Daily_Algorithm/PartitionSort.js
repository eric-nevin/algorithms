function swap(arr, left, right){
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
    	if (left == undefined) {
    		left = 0;
    		right = arr.length - 1;
    	}
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

console.log(quickSort([2,5,6,4,1,9,0]));


