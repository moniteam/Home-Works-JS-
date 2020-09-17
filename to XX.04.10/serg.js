function triangle(iter, char) {
	
	let triangPlus = char;
	console.log(triangPlus);
	
	for (let i = 1; i < (((iter - 1) / 2) + 1); i++) {
		
		triangPlus += char;
		
		console.log(triangPlus);
	}

	let triangMinus = triangPlus;

	for ( let j = (((iter - 1) / 2) + 1); j > 1; j--) {
		
		triangMinus = triangPlus.slice(0, triangMinus.length - 1);

		console.log(triangMinus);
	}
}

function mirroredTriangle(iter, char) {
	
	let space = ' ';
	let triangPlus = space.repeat(iter - 1) + char;
	console.log(triangPlus);
	
	for (let i = 1; i < (((iter - 1) / 2) + 1); i++) {
		
		triangPlus = triangPlus.slice(1, triangPlus.length) + char ;
		
		console.log(triangPlus);
	}

	let triangMinus = triangPlus;

	for ( let j = (((iter - 1) / 2) + 1); j > 1; j--) {
		
		triangMinus = triangPlus.slice(0, triangMinus.length - 1);

		console.log(triangMinus);
	}
}


