import runner from '../index'

function palindrome(str: string) {
	const reversed = str.split('').reverse().join('')
	return str === reversed
}

function palindromeV2(str: string) {
	let reversed: string = "";
	for (let char of str) {
		reversed = char + reversed
	}

	return str === reversed
}

function palindromeV3(str: string) {
	let reversed: string = "";
	for (let i = str.length -1; i >= 0; i--) {
		reversed += str[i]
	}

	return str === reversed;
}

function palindromeV4(str: string) {
	return str.split('').every((char, index) => {
		return char === str[str.length - 1 - index]
	});
}

const callbacks = [
	palindrome,
	palindromeV2,
	palindromeV3,
	palindromeV4,
]

runner('Enter your word: ', callbacks)