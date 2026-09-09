import express from "express";
import { connectDatabase } from "./database.js";

const app = express();
const PORT = process.env.PORT || 3000;

await connectDatabase();

app.get("/", (_req, res) => {
  res.send("Hello! Ariel");
});

app.listen(PORT, () => {});
