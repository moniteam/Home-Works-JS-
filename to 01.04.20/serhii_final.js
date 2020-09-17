
let arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

let collectObj = {};
let output;
let value = 1;
let sortArr = [];

for (let i of arr) {

	if ((i in collectObj) == false) {

		collectObj[i] = value;

	} else if ((i in collectObj) == true) {

		collectObj[i] = collectObj[i] + value;
	}
}

sortArr = Object.entries(collectObj).sort( (a, b) => a[1] - b[1] );

sortArr = sortArr.pop();
output = `${sortArr[0]} повторяется ${sortArr[1]} раз`;

console.log(output);

//==============================================================================================

let arr1 = [1, 2, 'a'];
let arr2 = [1, 2, 3, 4, 'b'];

function diffArr(arr1, arr2) {

	let diffArr = [];

	for (let i of arr1) {

		if (arr2.includes(i) == false) {

			diffArr.push(i);
		}
	}

	for (let j of arr2) {

		if (arr1.includes(j) == false) {

			diffArr.push(j);
		}
	}

	console.log(diffArr);
}

// diffArr(arr1, arr2);

//==============================================================================================

let array1 = [5, 2, 1, -10, 8];
let array2 = [5, 2, 1, -9, 3, 7];

function union(array1, array2) {

	const set = [...new Set( array1.concat(array2) )];
	console.log(set);

	   //--------ещё один способ----------

	/*let arr3 = array1.concat(array2);
	let arrDiff = [];

	for (let i of arr3) {

		if (arrDiff.includes(i) == false) {
			
			arrDiff.push(i);
		}
	}

	console.log(arrDiff);*/
	
}

// union(array1, array2);