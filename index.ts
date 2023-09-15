var readline = require('readline')

function runner(prompt: string, callbacks: Function[]): void {
	const input = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	input.question(prompt, (answer: any) => {
		callbacks.forEach(callback => {
			console.log('===================');
			console.time('Execution time')
			const response = callback(answer)
			console.timeEnd('Execution time')
			console.log(`${callback.name} = ${response}`);
		});
		input.close()
	})
}

export default runner