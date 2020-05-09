import express from "express";
import { bmiCalc } from "./bmiCalculator";
import { isString } from "util";
const app = express();

app.get("/hello", (_req, res) => {
	res.send("Hello from Express");
});

app.get("/bmi", (req, res) => {
	const height = req.query.height;
	const weight = req.query.weight;

	if (!isString(height) || !isString(weight)) {
		res.json({ error: "Malformatted parameters" });
	}

	let h = Number(height);
	let w = Number(weight);

	let result = bmiCalc(h, w);

	res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
