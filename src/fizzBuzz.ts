import runner from "../index";

function isDivisibleBy3(number: number): boolean {
	return number % 3 === 0;
}

function isDivisibleBy5(number: number): boolean {
	return number % 5 === 0;
}

function isDivisibleBy3And5(number: number): boolean {
	return number % 3 === 0 && number % 5 === 0;
}

function fizzBuzz(number: number): void {

	if (!number || number < 0) {
		console.log('Not accepted');
	}

	for (let i = 1; i <= number; i++) {
		if (isDivisibleBy3And5(i)) {
			console.log('FizzBuzz');
		} else if (isDivisibleBy3(i)) {
			console.log('Fizz');
		} else if (isDivisibleBy5(i)) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}

}

const callbacks = [
	fizzBuzz
]

runner('Enter your number: ', callbacks)