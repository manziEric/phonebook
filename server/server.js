import express from "express";
import data from "./data.js";

const app = express();

const port = process.env.PORT || 5000;

app.get("/api/phonenumbers", (req, res) => {
  res.send(data.phoneNumbers);
});

app.get("/", (req, res) => {
  res.send("server is runniing");
});

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
