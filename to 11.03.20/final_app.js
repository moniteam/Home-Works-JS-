// Найти числа с 5 внутри диапазона
function findNumbers()
{
	getNmbers();

	for (diapasoneBottom; diapasoneBottom <= diapasoneTop; diapasoneBottom++) 
	{
		
		diapasoneBottom = String(diapasoneBottom);
		
		let i = diapasoneBottom.indexOf('5') !== -1;

		if (i == true) 
		{
			console.log(diapasoneBottom);
			document.write(diapasoneBottom + ' ');
		}
	}


	// getConfirm();

}

// Сумма парных чисел в диапазоне
function summEvenNumbers()
{
	getNmbers();
	
	let summEven = 0;  //я случайно удалил этот сраный 0, и чуть с ума не сошёл, почему выбивает NaN

	for (diapasoneBottom; diapasoneBottom <= diapasoneTop; ++diapasoneBottom) 
	{
		
		if (diapasoneBottom % 2 == 0) 
		{
			summEven += diapasoneBottom;
		}
	} 

	console.log(summEven);
	alert(`Сумма парных чисел диапазона: ${summEven}`);

	// getConfirm();

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

	// getConfirm();

}

// Запрашиваем числа для диапазона
function getNmbers()
{
	let firstNumber;
	let secondNumber;
	
	firstNumber = +prompt('Введите целое число', "0");
	secondNumber = +prompt('Введите целое число', "1");

	if (firstNumber > secondNumber) 
	{
		diapasoneTop = firstNumber;
		diapasoneBottom = secondNumber;
		return [diapasoneBottom, diapasoneTop];
	}
	else
	{
		diapasoneTop = secondNumber;
		diapasoneBottom = firstNumber;
		return [diapasoneBottom, diapasoneTop];
	}
}

// Выбираем действие
function selectOperation() 
{
	let selectFunction = prompt("Для выбора необходимой операции, введи число соответсвующее операции.\n1) Вывести все числа дипазона, в которых есть 5, введите: 1\n2) Посчитать сумму всех парных чисел диапазона, введите: 2\n3) Посчитать итерации деления, введите: 3", "0");

	switch (selectFunction)
	{
		case '1':
			findNumbers();
			break;

		case '2':
			summEvenNumbers();
			break;

		case '3':
			divisionByTwo();
			break;

		default:
			window.location.reload();
	}
}

//Возврат к выбору функции
function getConfirm()
{
	confimRepeat = confirm(`Желаете вернутся к выбору операции?`);

	switch (confimRepeat)
	{
		case true:
			selectOperation();

		// case false:
		// 	window.close();
	}
}

selectOperation();