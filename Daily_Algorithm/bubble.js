function order(arr){
     var x = 0;
	while( x < arr.length-1){

	for(var j=0; j< arr.length-1; j++){
		if(arr[j]>arr[j+1]){
		var temp = arr[j];
		arr[j] = arr[j+1];
		arr[j+1] = temp;
        }		
	}
     x++;
}
}
order([1,5,4,6,2,9]);


function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}