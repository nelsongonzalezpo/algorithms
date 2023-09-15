import runner from "../index";

var readline = require('readline');

function isDivisibleBy3(number: number): boolean {
	return number % 3 === 0;
}

function isDivisibleBy5(number: number): boolean {
	return number % 5 === 0;
}

function isDivisibleBy3And5(number: number): boolean {
	return number % 3 === 0 && number % 5 === 0;
}

function fizzBuzz(number: number): string {

	if (!number || number < 0) {
		return 'Not accepted'
	}

	if (isDivisibleBy3And5(number)) {
		return 'FizzBuzz'
	} else if (isDivisibleBy3(number)) {
		return 'Fizz'
	} else if (isDivisibleBy5(number)) {
		return 'Buzz'		
	} else {
		return 'Does not apply'
	}
}

const callbacks = [
	fizzBuzz
]

runner('Enter your number: ', callbacks)