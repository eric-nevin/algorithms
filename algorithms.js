function checkBraces(string) {
	var temp1 = [];
	var temp2 = [];
	var count = 0;
	string.split("");
	for (var i = 0; i < string.length; i++) {
		if (string[i] == "{" || string[i] == "(" || string[i] == "[") {
			if (count == 0) {
				temp1.push(string[i]);
			} else {
				return false;
			}
		} else if (string[i] == "}" || string[i] == ")" || string[i] == "]") {
			count++;
			temp2.push(string[i]);
		} else {
			continue;
		}
	}
	if (temp1.length != temp2.length) {
		return false;
	}
	temp2.reverse();
	for (var j = 0; j < temp1.length; j++) {
		if (temp1[j] == '{'){
			if (temp2[j] != '}') {
				return false;
			}
		} else if (temp1[j] == '(') {
			if (temp2[j] != ')') {
				return false;
			}
		} else if (temp1[j] == '[') {
			if (temp2[j] != ']') {
				return false;
			}
		}
	}
	return true;
}
// console.log(checkBraces("][{()}"));

function uniqueCharacters(string) {
	var temp = [];
	string.split("");
	for (var i = 0; i < string.length; i++) {
		var unique = 0;
		for (var j = 0; j < temp.length; j++) {
			if (string[i] == temp[j]) {
				unique++;
			}
		}
		if (unique == 0) {
			temp.push(string[i]);
		}
	}
	var newString = temp.join("");
	return newString;
}
// console.log(uniqueCharacters('mississippi'));

function uniqueIndex(string) {
	var temp = [];
	string.split("");
	for (var i = 0; i < string.length; i++) {
		var unique = 0;
		for (var j = 0; j < temp.length; j++) {
			if (string[i] == temp[j]) {
				unique++;
				temp[j] = null;
			}
		}
		if (unique == 0) {
			temp.push(string[i]);
		}
	}

	for (var k = 0; k < temp.length; k++){
		if (temp[k] != null) {
			return temp[k];
		}
	}
	return false

}
// console.log(uniqueIndex("google"));

function commonSuffix(arr) {
	var temp = [];
	var temp3 = [];
	var bool = true;
	for (var i = 0; i < arr.length; i++) {
		arr[i].split("");
		var temp2 = [];
		for (var j = arr[i].length - 1; j > -1; j--) {
			temp2.push(arr[i][j]);
		}
		var newString = temp2.join("");
		temp.push(newString);
	
	}
	var k = 0;
	var p = 0;
	while (p < temp[0].length) {
		if (k > temp.length - 1) {
			k = 0;
			p++;
		}
		if (k == 0){
			temp3.push(temp[k][p]);
		} else {
			for (var i = p; i < temp3.length; i++) {
				
				if (temp[k][p] != temp3[i]) {
					temp3.pop();
					var newString = temp3.reverse().join("");
					if (newString.length > 0){
						return newString;
					} else {
						return false;
					}
				}
			}
		}
		k++;
	}
}
// console.log(commonSuffix(["carnation", "persuasion", "satisfaction"]));

// function anagram(string) {
// 	var temp = [];
// 	string.split("");
	

// }
// anagram('car');






