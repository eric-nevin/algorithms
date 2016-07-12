function radixSort(arr) {
	// Figure out the number of binary digits we're dealing with
	var k = Math.max.apply(null, arr.map(function(i) {
    	return Math.ceil(Math.log(i)/Math.log(2));
	}));

	for (var j = 0; j < k; j++) {
	    for (var i = 0, p = 0, b = 1 << j, n = arr.length; i < n; ++i) {
	        var o = arr[i];
	        if ((o & b) == 0) {
	            arr.splice(p++, 0, arr.splice(i, 1)[0]);
	        }
	    }
	}
	return arr;
}

// console.log(radixSort([12, 249, 23, 9494, 45, 5, 24]));

