function triangle(iter, char, mirrored = false) {

	if (checkParamNum(iter) == false) {

		console.log('Введи целое нечётное число!');
		return;
	}

	if (char.length > 1) {

		char = char.slice(0, 1);
	}
	
	let triangArr = [];
	let space = ' ';
	let count = ((iter - 1) / 2) + 1;

	for (let k = 0; k < count; k++) {
		
		triangArr.push(space);
	}

	if (mirrored == false) {

		for (let i = 0; i < count; i++) {
			
			triangArr.unshift(char);
			triangArr.pop();
			
			console.log(triangArr.join(''));
		}

		for (let j = count; j > 1; j--) {
			
			triangArr.shift();
			triangArr.push(space);

			console.log(triangArr.join(''));
		}
	} else if (mirrored == true) {

		for (let i = 0; i < count; i++) {
		
			triangArr.push(char);
			triangArr.shift();
		
			console.log(triangArr.join(''));
	}

		for (let j = count; j > 1; j--) {
			
			triangArr.pop();
			triangArr.unshift(space);

			console.log(triangArr.join(''));
		}
	}
}

function Rhombus(iter, char) {

	if (checkParamNum(iter) == false) {

		console.log('Введи целое нечётное число!');
		return;
	}

	if (char.length > 1) {

		char = char.slice(0, 1);
	}
	
	let count = ((iter - 1) / 2) + 1;
	let centerArr = (iter - 1) / 2;
	let space = ' ';
	let arrRhombus = [];
	let countDel = 1;
	
	for (let k = 0; k < iter; k++) {
		
		arrRhombus.push(space);
	} 

	arrRhombus.splice(centerArr, countDel, char);
	console.log(arrRhombus.join(''));

	for (let i = 1; i < count; i++) {
		
		arrRhombus.splice(centerArr - i, countDel, char);
		arrRhombus.splice(centerArr + i, countDel, char);
		
		console.log(arrRhombus.join(''));
	}

	for (let j = (count - 1); j > 0; j--) {
		
		arrRhombus.splice(centerArr + j, countDel, space);
		arrRhombus.splice(centerArr - j, countDel, space);

		console.log(arrRhombus.join(''));
	}
}

function checkParamNum(number) {
	
	if ( (isNaN(number) == true) || (number <= 0) || (number % 2 == 0)) {

		return false;
	}
}
triangle(23, 'lorem');
triangle(23, 'lorem', true);
Rhombus(23, 'l');