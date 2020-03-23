interface IResult {
	periodLength: number;
	trainingDays: number;
	target: number;
	average: number; // Horas totales de entrenamiento / periodLength
	success?: boolean;
	rating: number;
	ratingDescription: string;
}

const calculateExercises = (dailyHours: number[] = [3, 0, 2, 4.5, 0, 3, 1]): IResult => {
	const periodLength = dailyHours.length;

	// Dias con al menos 1 hora de entrenamiento
	const trainedDays: number[] = dailyHours.filter(day => day !== 0);

	const trainingDays: number = trainedDays.length;

	// Total de horas entrenadas
	const totalHours: number = trainedDays.reduce(
		(horas: number, total: number) => horas + total,
		0
	);

	const average = totalHours / periodLength;

	const target = 2;

	const success: boolean = average >= target ? true : false;

	let rating: number;
	let ratingDescription: string;

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
		average
	};
};

console.log(calculateExercises());
