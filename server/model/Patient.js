import mongoose from "mongoose";
import Prescription from "./Prescription";
// Patient Schema
const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    abdmNumber: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    prevailingIllness: {
        type: String
    },
    prescriptions: [Prescription] // Reference to prescriptions
}, { timestamps: true });

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
