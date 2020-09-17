// Найти числа с 5 внутри
function findNumbers()
{
	let firstNumber;
	let secondNumber;
	let diapasoneBottom;
	let diapasoneTop;

	firstNumber = +prompt('Введите целое число', "0");
	secondNumber = +prompt('Введите целое число', "1");

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

// Сумма парных чисел
function summEvenNumbers()
{
	let firstNumber;
	let secondNumber;
	let diapasoneBottom;
	let diapasoneTop;
	let summEven = 0;

	firstNumber = +prompt('Введите целое число', "0");
	secondNumber = +prompt('Введите целое число', "1");

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
		
		if (diapasoneBottom % 2 == 0) 
		{
			summEven += diapasoneBottom;
		}
	} 

	console.log(summEven);
	alert(`Сумма парных чисел диапазона: ${summEven}`);
}

// Посчтить итерации
function divisionByTwo()
{
	let firstNumber = 1000;
	let counter = 0;

	while ( firstNumber > 50 ) 
	{
		firstNumber /=  2;
		console.log(firstNumber);
		counter = ++counter;
	}

	alert(`Количество итераций: ${counter}`);
}


let selectFunction;

selectFunction = prompt("Для выбора необходимой операции, введи число соответсвующее операции.\n1) Вывести все числа дипазона, в которых есть 5, введите: 1\n2) Посчитать сумму всех парных чисел диапазона, введите: 2\n3) Посчитать итерации деления, введите: 3", "0");

if (selectFunction == '1') 
{
	findNumbers();
}
else if (selectFunction == '2') 
{
	summEvenNumbers();
}
else if (selectFunction == '3') 
{
	divisionByTwo();
}