import express from "express";
import PhoneNumber from "../models/phoneNumberModel";

const phoneNumberRouter = express.Router();

phoneNumberRouter.get("/", async (req, res) => {
  const numbers = await PhoneNumber.find();
  res.send(numbers);
});

phoneNumberRouter.post("/createEntry", async (req, res) => {
  const userEntry = new PhoneNumber({
    firstName: "lorem",
    lastName: "ipsum",
    phoneNumber: "03222255886",
  });
  const createdEntry = await userEntry.save();

  res.send({ message: "created new entry", entry: createdEntry });
});

export default phoneNumberRouter;
