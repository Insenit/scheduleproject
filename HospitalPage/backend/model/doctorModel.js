import mongoose from "mongoose";
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  YOE: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
