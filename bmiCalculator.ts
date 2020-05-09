interface IBmiValues {
	value1: number;
	value2: number;
}

const bmiCalc = (height: number, mass: number): void => {
	const sqtHeight = height / 100;

	const bmi = mass / (sqtHeight * sqtHeight);

	if (bmi < 15) {
		console.log(`Very severely underweight\nBMI: ${bmi}`);
	} else if (bmi < 16) {
		console.log(`Severely underweight\nBMI: ${bmi}`);
	} else if (bmi < 18.5) {
		console.log(`Underweight\nBMI: ${bmi}`);
	} else if (bmi < 25) {
		console.log(`Normal (Healthy weight)\nBMI: ${bmi}`);
	} else if (bmi < 30) {
		console.log(`Overweight\nBMI: ${bmi}`);
	} else if (bmi < 35) {
		console.log(`Obese Class I (Moderately obese)\nBMI: ${bmi}`);
	} else if (bmi < 40) {
		console.log(`Obese Class II (Severely obese)\nBMI: ${bmi}`);
	} else {
		console.log(`Obese Class III (Very severely obese)\nBMI: ${bmi}`);
	}
};

const parseArguments = (args: Array<string>): IBmiValues => {
	if (args.length !== 4) throw new Error("Args must be only 2");

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			value1: Number(args[2]),
			value2: Number(args[3]),
		};
	} else {
		throw new Error("Provided values must be numbers!");
	}
};

try {
	const { value1, value2 } = parseArguments(process.argv);
	bmiCalc(value1, value2);
} catch (e) {
	console.log("Error, something bad happened, message: ", e.message);
}
