// Найти числа с 5 внутри
function findNumbers(firstNumber, secondNumber)
{
	if (firstNumber > secondNumber) 
	{
		diapasoneTop = firstNumber;
		diapasoneBottom = secondNumber;
	}
	else
	{
		diapasoneTop = secondNumber;
		diapasoneBottom = firstNumber;
	}

	 for (diapasoneBottom; diapasoneBottom <= diapasoneTop; diapasoneBottom++) 
	{
		
		diapasoneBottom = String(diapasoneBottom);
		
		let i = diapasoneBottom.indexOf('5') !== -1;

		if (i == true) 
		{
			console.log(diapasoneBottom);
		}
	} 
}


let firstNumber;
let secondNumber;
let diapasoneBottom;
let diapasoneTop;

firstNumber = +prompt('Введите целое число', "0");
secondNumber = +prompt('Введите целое число', "1");

findNumbers(firstNumber, secondNumber);























