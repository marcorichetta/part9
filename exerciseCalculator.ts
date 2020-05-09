interface Result {
	periodLength: number;
	trainingDays: number;
	target: number;
	average: number; // Horas totales de entrenamiento / periodLength
	success?: boolean;
	rating: number;
	ratingDescription: string;
}

const calculateExercises = (target: number, dailyHours: number[]): Result => {
	const periodLength = dailyHours.length;

	// Dias con al menos 1 hora de entrenamiento
	const trainedDays: number[] = dailyHours.filter((day) => day !== 0);

	const trainingDays: number = trainedDays.length;

	// Total de horas entrenadas
	const totalHours: number = trainedDays.reduce(
		(horas: number, total: number) => horas + total,
		0
	);

	const average = totalHours / periodLength;

	const success: boolean = average >= target ? true : false;

	let rating = 0;
	let ratingDescription = "";

	if (average / target > 1) {
		rating = 2;
		ratingDescription = "You accomplished your target!";
	} else if (average / target > 1.5) {
		rating = 3;
		ratingDescription = "You made it great!";
	} else if (average / target < 1) {
		rating = 1;
		ratingDescription = "You didn't accomplish your target";
	}

	return {
		periodLength,
		trainingDays,
		success,
		rating,
		ratingDescription,
		target,
		average,
	};
};

const parseArgs = (args: Array<string>): Array<number> => {
	if (args.length !== 12) throw new Error("Args must be 10");

	// Cast every arg into a number
	const parameters = args.slice(2).map((arg) => Number(arg));

	return parameters;
};

try {
	const [target, ...values] = parseArgs(process.argv);
	console.log(calculateExercises(target, values));
} catch (e) {
	console.log("Error, something bad happened, message: ", e.message);
}
