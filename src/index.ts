import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { generateDIDDocument } from "./did/generate-did";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const didID = generateDIDDocument();
  console.log(didID);
  res.send(`Express + TypeScript Server + ${didID}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
