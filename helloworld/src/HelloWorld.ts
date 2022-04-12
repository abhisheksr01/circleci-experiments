import express, { Request, Response, Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  console.log('responding to the request');
  res.send("Hello World from Typescript with Node.js!")
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});