function selection(arr){
	var index;
	for(var i=0; i<arr.length; i++){
		min = arr[i];
		index = i;
		for(var j = i+1; j<arr.length; j++){
			if(min > arr[j]){
				min = arr[j];
				index=j;
			}
		}
		var temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	return arr;
}

console.log(selection([2,7,3,4,10,5]));

//Works