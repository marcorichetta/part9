import express from "express";
const app = express();

app.get("/hello", (_req, res) => {
	res.send("Hello from Express");
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
