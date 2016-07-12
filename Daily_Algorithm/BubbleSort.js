function bubbleSort(arr){
  var swapped = true;

  while(swapped === true){
    swapped = false;
    for(var i=0; i<arr.length; i++){
      if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([10,5,7,2,15,1]));
//works!
