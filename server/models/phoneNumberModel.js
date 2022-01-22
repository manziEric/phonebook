import mongoose from "mongoose";

const phoneNumberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    phoneNumber: { type: String, required: true, unique: false },
  },
  {
    timestamps: true,
  }
);

const PhoneNumber = mongoose.model("PhoneNumber", phoneNumberSchema);
export default PhoneNumber;
