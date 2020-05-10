import express from "express";
import { bmiCalc } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
import { isString, isArray } from "util";
const app = express();
app.use(express.json()); // for parsing application/json

app.get("/hello", (_req, res) => {
	res.send("Hello from Express");
});

app.get("/bmi", (req, res) => {
	const height = req.query.height;
	const weight = req.query.weight;

	if (!isString(height) || !isString(weight)) {
		res.status(500).json({ error: "Malformatted parameters" });
		return;
	}

	const h = Number(height);
	const w = Number(weight);

	const result = bmiCalc(h, w);

	res.json(result);
});

app.post("/exercises", (req, res) => {
	const { target, ...exerciseObject } = req.body;

	if (isNaN(target) || !isArray(exerciseObject.daily_exercises)) {
		res.status(500).json("Malformatted parameters");
		return;
	}

	const result = calculateExercises(target, exerciseObject.daily_exercises);

	res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
