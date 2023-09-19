import runner from '../index'

function reverseInt(n: number) {
	let str = n.toString()
	const number = parseInt(str.split('').reverse().join(''))
	return n < 0 ? number * -1 : number
}

function reverseIntV2(n: number) {
	let str = n.toString()
	return Math.sign(n) * parseInt(str.split('').reverse().join(''))
}

const callbacks = [
	reverseInt,
	reverseIntV2
]

runner('Enter your number: ', callbacks)