import express from "express";
import PhoneNumber from "../models/phoneNumberModel.js";

const phoneNumberRouter = express.Router();

phoneNumberRouter.get("/", async (req, res) => {
  const numbers = await PhoneNumber.find();
  res.send(numbers);
});

phoneNumberRouter.post("/createEntry", async (req, res) => {
  const userEntry = new PhoneNumber({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });
  const createdEntry = await userEntry.save();

  res.send({ message: "created new entry", entry: createdEntry });
});

phoneNumberRouter.put("/:id", async (req, res) => {
  const phoneNumberId = req.params.id;
  const phoneNumber = await PhoneNumber.findById(phoneNumberId);

  if (phoneNumber) {
    phoneNumber.firstName = req.body.firstName;
    phoneNumber.lastName = req.body.lastName;
    phoneNumber.phoneNumer = req.body.phoneNumer;

    const updatePhoneNumbers = await phoneNumber.save();
    res.send({ message: "Entry edited", phoneNumber: updatePhoneNumbers });
  } else {
    res.status(404).send({ message: "Entry to be updated not found" });
  }
});

export default phoneNumberRouter;
