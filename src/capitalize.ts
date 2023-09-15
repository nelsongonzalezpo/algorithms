import runner from "../index";

function capitalize(str: string): string {
	let capitalized = ''
	str.split('').forEach((char, index) => {

		if (index === 0 || str[index - 1] === ' ') {
			capitalized += char.toLocaleUpperCase()
		} else {
			capitalized += char
		}
	});

	return capitalized
}

const callbacks = [
	capitalize,
]

runner('Enter your word/phrase: ', callbacks)
