interface IBmiValues {
	height: number;
	weight: number;
}

interface IResults extends IBmiValues {
	result: string;
}

export const bmiCalc = (height: number, weight: number): IResults => {
	const sqtHeight = height / 100;

	const bmi = weight / (sqtHeight * sqtHeight);

	let bmiResult: string = "";

	if (bmi < 15) {
		bmiResult = `Very severely underweight`;
		console.log(`Very severely underweight\nBMI: ${bmi}`);
	} else if (bmi < 16) {
		bmiResult = `Severely underweight`;
		console.log(`Severely underweight\nBMI: ${bmi}`);
	} else if (bmi < 18.5) {
		bmiResult = `Underweight`;
		console.log(`Underweight\nBMI: ${bmi}`);
	} else if (bmi < 25) {
		bmiResult = `Normal (Healthy weight)`;
		console.log(`Normal (Healthy weight)\nBMI: ${bmi}`);
	} else if (bmi < 30) {
		bmiResult = `Overweight`;
		console.log(`Overweight\nBMI: ${bmi}`);
	} else if (bmi < 35) {
		bmiResult = `Obese Class I (Moderately obese)`;
		console.log(`Obese Class I (Moderately obese)\nBMI: ${bmi}`);
	} else if (bmi < 40) {
		bmiResult = `Obese Class II (Severely obese)`;
		console.log(`Obese Class II (Severely obese)\nBMI: ${bmi}`);
	} else {
		bmiResult = `Obese Class III (Very severely obese)`;
		console.log(`Obese Class III (Very severely obese)\nBMI: ${bmi}`);
	}

	return {
		height,
		weight,
		result: bmiResult,
	};
};

const parseArguments = (args: Array<string>): IBmiValues => {
	if (args.length !== 4) throw new Error("Args must be only 2");

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			height: Number(args[2]),
			weight: Number(args[3]),
		};
	} else {
		throw new Error("Provided values must be numbers!");
	}
};

try {
	const { height, weight } = parseArguments(process.argv);
	bmiCalc(height, weight);
} catch (e) {
	console.log("Error, something bad happened, message: ", e.message);
}
