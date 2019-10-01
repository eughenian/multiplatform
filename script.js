
	// ******************
	// If else statements

	//tipe data string
	// var firstName = 'John';
	// var status = 'single';

	// if (status === 'married') { //=== tiga samadengan strong quality tipe datanya
	// 	console.log(firstName + ' is married');
	// }else{
	// 	console.log(firstName + ' will hopefully marry soon');
	// }


	// // tipe data boolean
	// var isMarried = true;

	// if(isMarried){
	// 	console.log(firstName + ' is married');
	// }else{
	// 	console.log(firstName + ' will hopefully marry soon');
	// }

	// ******************
	// Boolean Logic (AND,OR,NOT)

	// var firstName = 'John';
	// var age = 20;

	// if(age < 13){
	// 	console.log(firstName + " is a boy");
	// }else if(age >= 13 && age < 20){ //age <= 13 AND age <20
	// 	console.log(firstName + " is a teenager");
	// }else if(age >= 20 && age < 30){
	// 	console.log(firstName + " is a young man");
	// }else{
	// 	console.log(firstName + " is a man");
	// }

	// ******************
	// The Ternary Operator and Switch Statement

	// var firstName = 'John';
	// var age = 10;

	// //Ternary Operator
	// age >= 10 ? console.log(firstName + ' drinks juice')
	// : console.log(firstName + ' drinks milk');

	// // if(age >= 22){
	// // 	console.log(firstName + ' drinks juice')
	// // }else{
	// // 	console.log(firstName + ' drinks milk')
	// // }

	// var drink = age >= 10 ? 'juice' : 'milk';
	// console.log(drink);

	// //Switch Statement
	// var job = 'teacher';

	// switch(job){
	// 	case 'instructor':
	// 	case 'teacher':
	// 		console.log(firstName + ' is a teacher and instructor');
	// 		break;
	// 	case 'driver':
	// 		console.log(firstName + ' is a driver');
	// 		break;
	// 	case 'designer':
	// 		console.log(firstName + ' is a designer');
	// 		break;
	// 	default:
	// 		console.log(firstName + ' does something else');
	// }

	// age = 13;
	// switch(true){
	// 	case age < 13:
	// 	console.log(firstName + ' is a boy');
	// 	break;
	// 	case age >=13 && age < 20:
	// 	console.log(firstName + " is a teenager");
	// 	break;
	// 	case age >=20 && age < 30:
	// 	console.log(firstName + " is a young man");
	// 	break;
	// 	default:
	// 	console.log(firstName + " is a man");
	// }

	// *********************
	// functions

	// function calculateAge(birthYear){
	// 	return 2019 - birthYear;
	// }

	// var ageSir = calculateAge(1987);
	// var ageAyi = calculateAge(1997);
	// var ageEnji = calculateAge(1999);

	// console.log(ageSir, ageAyi, ageEnji);

	// function yearUntilRetirement(year, firstName){
	// 	var age = calculateAge(year);
	// 	var retirement = 60 - age;
	// 	if(retirement>0){
	// 		console.log(firstName + ' retires in '+ retirement + ' years');
	// 	}else{
	// 		console.log(firstName + ' is already retired ');
	// 	}
	// }

	// yearUntilRetirement(1997,'Ayi');
	// yearUntilRetirement(1950, 'Opa');
	// yearUntilRetirement(1999, 'Enji');

	// *********************
	// function delaction

	// function whatDoYouDo (job, firstName);

	// // function expression
	// var whatDoYouDo = function(job, firstName){
	// 	switch(job){
	// 		case 'teacher':
	// 			return firstName + ' is a teacher.';
	// 		case 'driver':
	// 			return firstName + ' is a driver.';
	// 		case 'designer':
	// 			return firstName + ' is a designer.';
	// 		default:
	// 			return firstName + ' does something else.';
	// 	}
	// }

	// console.log(whatDoYouDo('teacher','John'));
	// console.log(whatDoYouDo('BCA','Meki'));
	// console.log(whatDoYouDo('driver','Mudi'));

	// *********************
	// Array

	// Initialize Array
	var names = ['John', 'Mark', 'Jane'];		//cara pertama
	var years = new Array(1990, 1969, 1948);	//cara pekedua

	console.log(names[0]);
	console.log(names.length);

	//Mutate Array Data
	names[0] = 'Ben';
	names[5] = 'Mary';
	names[names.length] = 'Mary';
	console.log(names);

	//Different Data Types
	var john = ['John', 'Smith', 1990, 'designer', false];

	john.push('blue');	//input elemen paling akhir
	john.unshift('Mr');	//input elemen paling depan

	john.pop();			//hapus elemen paling akhir
	john.pop();
	john.shift();		//hapus elemen paling dpean
	console.log(john);

	//Exercise #2

	/*
		John and his family went on a holiday and
		went to 3 different restaurants. The bills
		were $124, $48 and $268

		To tip the waiter a fair amount, John created
		a simple tip calculator (as a function), He likes
		to tip 20% of the bill when the bill is less than
		$50, 15% when the bill is between $50 and $200, and
		10% if the bill is more than $200.

		In the end, john would like to have 2 arrays:
		1. Containing all 3 tips (one for each bill)
		2. Containing all 3 final amounts (bill + tip)
		
		(Note: To calculate 20% of a value, simply
		multiply it with 20/100 = 0.2)
		
		Goodluck:*
	*/

	// var bills = [124, 48, 268];
	// var names = ['John', 'Mark', 'Jane'];		
	// var names = ['John', 'Mark', 'Jane'];		

	// var 

	// var calculateTip = function(tip, bills){
	// 	switch(tip){
	// 		case bills<50:
	// 			function calculateTip(bill){
	// 				return 0.2*bill;
	// 			}
	// 		case 'driver':
	// 			return firstName + ' is a driver.';
	// 		case 'designer':
	// 			return firstName + ' is a designer.';
	// 		default:
	// 			return firstName + ' does something else.';
	// 	}
	// }

	// ****************
	// exercise 2

	function tipCalculator(bills){
		var percentage;
		if(bills < 50){
			percentage = .2;
		} else if(bills >= 50 && bills < 200){
			percentage = .15;
		} else {
			percentage = .1;
		}
		return percentage * bills;
	}

	var bills = [124, 48, 268];
	var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
	var finalAmounts = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

	console.log(bills, tips, finalAmounts);
	// ****************
	// Object and Properties

	//object
	//properties = key&values
	var john = {
		//property1
		firstName: 'John',
		//property2
		lastName: 'Smith',
		birthYear: 1990,
		//dalam object boleh sisipkan array
		family : ['Jane', 'Mark', 'Bob', 'Emily'],
		job: 'driver',
		//dalam object boleh sisipkan bollean
		isMarried: false
	}

	//tampilkan object
	console.log(john.firstName);
	console.log(john.lastName);
	console.log(john.family[3]);
	console.log(john['birthYear']);
	console.log(john['family'][3]);
	var x = 'birthYear';
	console.log(john[x]);

	var jane = new Object();
	jane.firstName = 'Jane';
	jane.birthYear = '1969';
	jane['lastName'] = 'Smith';
	console.log(jane);

	// ****************
	// Object and Method

	var john = {
		firstName: 'John',
		lastName: 'Smith',
		birthYear: 1990,
		family : ['Jane', 'Mark', 'Bob', 'Emily'],
		job: 'driver',
		isMarried: false,
		//tambah functions expression
		calAge: function(birthYear){
			this.age = 2019 - this.birthYear;
			return this.age; //this untuk menunjuk properties dalam object tsb
		}
	}

	var age = john.calAge();
	console.log(age);
	console.log(john);
	// john.calAge();

	//call functions supaya properties age ada nilai
	//baru dipanggil nilai
	// console.log(john.calAge(1987));

	/*
		Exercise 3

		Let's remember the first exercise where Mark and John
		compared their BMI's. Let's now implement the same
		functionality with object and methods.

		1. For each them, create an object with properties
		for their full name, mass, and height
		2. Then, add a method to each object to calculate
		the BMI. Save the BMI to the object and also return it
		from the mehtod.
		3. In the end, log to the console who has the highest BMI
		together with the full name and the respective BMI.
		Don't forget the might have the same BMI

		Remember: BMI = mass / height ^ 2

		Goodluck
	*/
	// var mark = {
	// 	fullName: 'Mark Smith',
	// 	mass: 65,
	// 	height: 1.85,
	// 	calBMI: function(mass, height){
	// 		this.BMI = mass/(height*height);
	// 		return this.BMI;
	// 	}
	// }

	// var john = {
	// 	fullName: 'John Smith',
	// 	mass: 70,
	// 	height: 1.7,
	// 	calBMI: function(mass, height){
	// 		this.BMI = mass/(height*height);
	// 		return this.BMI;
	// 	}
	// }

	// if(mark.calBMI() > john.calBMI()){
	// 	console.log(mark.fullName + ' has the highest BMI with ' +  mark.calBMIm());
	// } else if(mark.calBMI() < john.calBMI()){
	// 	console.log(john.fullName + ' has the highest BMI with ' + john.calBMI());
	// } else{
	// 	console.log('Same BMI');
	// }

	// john.calBMI();
	// mark.calBMI();
	// console.log(john, mark);

	/*
		Loop and Iteration
	*/

	// for loop
	// for(var i=0; i<10; i+=2){
	// 	console.log(i);
	// }

	// var john = ['John', 'Smith', 1999, 'designer', false, 'blue'];

	// for (var i=0; i<john.length; i++){
	// 	console.log(john[i]);
	// }

	// var nama = 'John';
	// console.log(nama[1]+nama[2]+nama[3]+'s');

	// // White loop

	// var i = 0;
	// while(i=john.length){
	// 	console.log(john[i]);
	// 	i++;
	// }

	// Continue and Break Statement

	var john = ['John', 'Smith', 1999, 'designer', false, 'blue'];

	for (var i=0; i<john.length; i++){
		if (typeof john[i] !== 'string'){
			continue;
		}
		console.log(john[i]);
	}

	for(var i=0; i<john.length; i++){
		if(typeof john[i] !== 'string'){
			break;
		}
		console.log(john[i]);
	}

	// Looping Backward

	// for (var i=john.length; i>=0; i--){
	// 	console.log(john[i]);
	// }

	/*
		1. Let and cost
	*/

		//ES5
		//console.log(firstName5);
		// var firstName5 = 'John';

		// //ES6
		// //console.log(firstName6);
		// let firstName6 = 'Jane'; //nilai bisa dirubah
		// firstName = 'Kyle';
		// console.log(firstName6);
		// const birthYear = 1991; //nilai tidak bisa dirubah
		// console.log(firstName6, birthYear);

		//Scope ES5 : global scope & function scope
		// let showData = function(birthYear){
		// 	if(birthYear >= 1990){
		// 		var firstName = 'John';
		// 		var birthYear = 1990;
		// 	}
		// 	console.log('First Name : ' + firstName);
		// 	console.log('Birth Year : ' + birthYear);
		// }
		// showData(1991);

		//Scope ES6 : block scope
		// let showData6 = function(birthYear){
		// 	if(birthYear >= 1990){
		// 		let firstName = 'John';
		// 	}
		// 	console.log('First Name : ' + firstName);
		// 	console.log('Birth Year : ' + birthYear);
		// }
		// showData6(1991);

	/*
		2. Block and IIFES (Immediately Invoked Function Expression)
	*/
		//ES5
		(function(){
			var x = 5;
			var y = 10;
			console.log(x, y);
		})();

		//ES6
		{
			let x = 15;
			let y = 25;
			console.log(x, y);
		}

	/*
		3. String
	*/

		//ES5
		var firstName = 'John';
		var lastName = 'Smith';
		var birthYear = 1990;

		var calcAge = function(birthYear){
			return 2019 - birthYear;
		}

		console.log(firstName + ' ' + lastName + ', ' + 'BirthYear' + ' = ' + birthYear + ', Age = ' +calcAge(birthYear));

		//ES6
		console.log(`${firstName} ${lastName}, BirthYear = ${birthYear}, Age = ${calcAge(birthYear)}`);

		//Simbol =>
		//No Parameter
		//ES5
		var showData5 = function (){
			return ('Good Bye World');
		}
		console.log(showData5());

		//ES6
		let showData6 = () => 'Good Bye World';
		console.log(showData6());

		//One Parameter
		//ES5
		var showData5 = function (firstName){
			return (`Hello ${firstName}`);
		}
		console.log(showData5('John'));
		//ES6
		const showd6 = firstName => `Hello ${firstName}`;
		console.log(showData6('Marry'));

		//Two Parameters
		//ES5
		var add5 = function (x, y){
			return x + y;
		}
		console.log(add5(5,7));

		//ES6
		let add6 = (x, y) => x + y;
		console.log(add6(8,9));

		//Object Literals
		//ES5
		var johnData5 = function(id, name){
			return {
				id: id,
				name: name
			}
		}
		console.log(johnData5(2, 'John'));

		//ES6
		let johnData6 = (id, name) => ({id: id, name: name});
		console.log(johnData6(2, 'John'));
	/*
		1. Let and cost
	*/