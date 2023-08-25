import mongoose from "mongoose";
import Dosage from "./Dosage";

// Prescription Schema
const prescriptionSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        required: true
    },
    dosage: [Dosage]
}, { timestamps: true });

const Prescription = mongoose.model("Prescription", prescriptionSchema)
export default Prescription