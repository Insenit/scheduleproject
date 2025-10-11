import mongoose from "mongoose";
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: { type: String, trim: true },
});

module.exports = mongoose.model("Patient", patientSchema);
