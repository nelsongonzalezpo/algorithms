import runner from '../index'

function reverseString(str: string): string {
	let response: string[] = []
	response = str.split('')
	response.reverse()
	return response.join('');
}

function reverseStringV2(str: string): string {
	let reversedWord = ''	
	for (let i = str.length -1; i >= 0; i--) {
		reversedWord += str[i]
	}	

	return reversedWord
}

function reverseStringV3(str: string): string {
	let reversedWord = ''
	for (let char of str) {
		reversedWord = char + reversedWord
	}
	return reversedWord
}

function reverseStringV4(str: string): string {
	return str.split('').reduce((reversedString, char) =>  char + reversedString, '')
}

const callbacks = [
	reverseString,
	reverseStringV2,
	reverseStringV3,
	reverseStringV4,
]

runner('Enter your string: ', callbacks)