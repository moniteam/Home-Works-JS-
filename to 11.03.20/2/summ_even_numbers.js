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
alert(summEven);