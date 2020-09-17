let userSex;
let userHeight;
let userMassa;
let indexMassa;


/* Определяем пол, но зачем? */
userSex = confirm('Если ты мужчина, нажми "ОК", если женщина - "Отмена"');
if (userSex == true) {
	userSex = 'Мужчина';
} else {
	userSex = 'Женщина';
}
console.log(userSex);

/* Запрашиваем рост */
userHeight = +prompt('Введи свой рост в метрах:', '');

/* Запрашиваем вес */
userMassa = +prompt('Введи свой вес в килограммах:', '');

/* Считаем индекс массы */
indexMassa = userMassa / userHeight ** 2;
indexMassa = +indexMassa.toFixed(1);

console.log(`Индекс: ${indexMassa}`);
console.log(typeof indexMassa);

/* Вывод результатов пользователю */
if (indexMassa < 18.5) 
{
	
	alert(`Индекс массы тела: ${indexMassa} \n Дефицит массы тела.`);

}
else if ( 24.9 >= indexMassa && indexMassa >= 18.5) 
{

	alert(`Индекс массы тела: ${indexMassa} \n Нормальная масса тела.`);

}
else if (29.9 >= indexMassa && indexMassa >= 25.0) 
{

	alert(`Индекс массы тела: ${indexMassa} \n Избыточная масса тела (предожирение).`);

}
else if (34.9 >= indexMassa && indexMassa >= 30.0) 
{

	alert(`Индекс массы тела: ${indexMassa} \n Ожирение I степени.`);

}
else if (39.9 >= indexMassa && indexMassa >= 35.0) 
{

	alert(`Индекс массы тела: ${indexMassa} \n Ожирение II степени.`);

}
else if (40.0 <= indexMassa) {

	alert(`Индекс массы тела: ${indexMassa} \n Ожирение III степени.`);

}