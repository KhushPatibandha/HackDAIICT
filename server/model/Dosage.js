import mongoose from "mongoose";

// Dosage Schema
const dosageSchema = new mongoose.Schema({
    dosage: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Dosage = mongoose.model("Dosage", dosageSchema);
export default Dosage