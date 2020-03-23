const bmiCalc = (h: number, mass: number): void => {
	const sqtHeight = h / 100;

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

console.log(bmiCalc(180, 74));
