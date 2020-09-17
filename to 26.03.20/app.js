function getParam(param) {

	let i;

	if (param == 'num') {

		while (isNaN(i) == true || i < 0) {

			i = +prompt('Введи целое число', '5');

			if (isNaN(i) == false && i >= 0) {

				return i;

			}

		}

	} else {

		return prompt('Введи слово', 'Hallo');

	}

}

function fibonacci(n) {

	let first = 0, second = 1, result = 1;

	if (n == 0) {

		return first;

	} else if (n == 1) {

		return second;

	} else {

		for (let i = 1; i <= n; i++) {

			result = first + second;
			first = second;
			second = result;

		}

	}

	return result;

}

function findVowels(str) {

	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	for (let i of str.toLowerCase()) {

		if (vowels.includes(i)) {

			count += 1;

		}

	}

	return count;

}

function fizzBuzz(n) {

	for (let i = 1; i <= n; i++) {

		if ((i % 5 == 0) && (i % 3 == 0)) {

			console.log('Fizzbuzz');

		} else if (i % 3 == 0) {

			console.log('fizz');

		} else if (i % 5 == 0) {

			console.log('buzz');

		} else {

			console.log(i);
		}

	}

}

//console.log( fibonacci( getParam('num') ) );

console.log(findVowels(getParam('')));

//fizzBuzz( getParam('num') );