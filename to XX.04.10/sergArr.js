function triangle(iter, char) {

	if (checkParamNum(iter) == false) {

		console.log('Введи целое нечётное число!');
		return;
	}

	if (char.length > 1) {

		char = char.slice(0, 1);
	}
	
	let triangArrPlus = [];
	let space = ' ';
	let count = ((iter - 1) / 2) + 1;

	for (let k = 0; k < count; k++) {
		
		triangArrPlus.push(space);
	}

	for (let i = 0; i < count; i++) {
		
		triangArrPlus.unshift(char);
		triangArrPlus.pop();
		
		console.log(triangArrPlus.join(''));
	}

	for (let j = count; j > 1; j--) {
		
		triangArrPlus.shift();
		triangArrPlus.push(space);

		console.log(triangArrPlus.join(''));
	}
	
	let confirmReverse = confirm('Отразить треугольник по вертикали?');

	if (confirmReverse == true) {
		
		mirroredTriangle(count, triangArrPlus);
	}
}

function mirroredTriangle(count, char) {

	console.clear();
	
	let triangArrPlus = char.reverse();
	console.log(triangArrPlus.join(''));

	let value = triangArrPlus[triangArrPlus.length - 1];
	let space = triangArrPlus[0];

	for (let i = 1; i < count; i++) {
		
		triangArrPlus.push(value);
		triangArrPlus.shift();
		
		console.log(triangArrPlus.join(''));
	}

	for (let j = count; j > 1; j--) {
		
		triangArrPlus.pop();
		triangArrPlus.unshift(space);

		console.log(triangArrPlus.join(''));
	}
}

// triangle(15, 'X');

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

Rhombus(15, 'dfgh');

function checkParamNum(number) {
	
	if ( (isNaN(number) == true) || (number <= 0) || (number % 2 == 0)) {

		return false;
	}
}

/*function checkParamStr(char) {
	
	if (char.length > 1) {

		return char = char.slice(0, 1);
	}
}
*/