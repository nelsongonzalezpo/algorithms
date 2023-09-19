import runner from '../index'

function maxChar(str: string) { 
	const stringMap: any = {}
	let maxChar: string = '';
	let maxValue: number = 0;

	str.split('').forEach(char => {
		if (stringMap[char]) {
			stringMap[char] ++
		} else {
			stringMap[char] = 1
		}
	});

	for (let char in stringMap) {
		if (stringMap[char] > maxValue) {
			maxValue = stringMap[char]
			maxChar = char
		}
	}
}

const callbacks = [
	maxChar
]

runner('Enter your word: ', callbacks)