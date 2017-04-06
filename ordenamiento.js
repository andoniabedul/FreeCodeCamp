function swap(myArray,indexOne,indexTwo){
	var tmpVal = myArr[indexOne];
	myArr[indexOne] = myArr[indexTwo];
	myArr[indexTwo] = tmpVal;
	return myArr;
}

function bubbleSort(myArr){
	var size = myArr.length;
	for (var pass = 1; pass < size; pass++) {
		for (var left = 0; left < (size-pass); left++) {
			var right = left+1;
			if(myArr[left]>myArr[right])
				swap(myArr,left,right);
		};
	};
	return myArr;
}

myArr = [2, 7, 3, 8, 1]

bubbleSort(myArr);

