import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import phoneNumberRouter from "./routes/phoneNumbersRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_LOCALHOST)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use("/api/phonenumbers", phoneNumberRouter);

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
