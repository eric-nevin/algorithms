
function mergeHelper(arr1, arr2){
  var count1 = 0;
  var count2 = 0;
  var newArr =[];
  var allNumbers = arr1.length + arr2.length;

  while(newArr.length < allNumbers){
   if(count2>=arr2.length || count1<arr1.length && arr1[count1]<=arr2[count2]){
      newArr.push(arr1[count1]);
      count1++;
   }
   else{
      newArr.push(arr2[count2]);
      count2++;
    }
  }
  return newArr;
}
function mergeSort(arr){
  if(arr.length<= 1){
    return arr;
  }
  var left = arr.slice(0, Math.floor(arr.length/2));
  console.log(left,"left");
  var right = arr.slice(Math.floor(arr.length/2));
  console.log(right,"right");
  return mergeHelper(mergeSort(left), mergeSort(right));
}


console.log(mergeSort(
  [1,7,8,5,6,4,2,-1]
));
