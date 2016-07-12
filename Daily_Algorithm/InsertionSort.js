function insertionSort(arr){
  for(var i =1; i<arr.length; i++){
    if(arr[i]< arr[i-1]){
      var temp = arr[i];
      var k = i-1;
      while(arr[k]>temp && k>=0){
        arr[k+1]=arr[k];
        k--;
      }
      arr[k+1] = temp;
    }
  }
  return arr;
}

console.log(insertionSort([1,5,7,9,10,3]));
//works!
