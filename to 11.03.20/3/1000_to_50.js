let firstNumber = 1000;
let counter = 0;

while ( firstNumber > 50 ) 
{
	firstNumber /=  2;
	console.log(firstNumber);
	counter = ++counter;
}

alert(`Количество итераций: ${counter}`);