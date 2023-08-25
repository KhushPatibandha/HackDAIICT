import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    medicineproperty:[{
        medicinename:{
            type:String,
            required:true
        },
        Dosage:{
            type:String,
            required:true
        },
        dosagePerDay:{
            type:Number,
            required:true
        }
    } ]
});

const Medicine = new mongoose.model('Medicine' , medicineSchema);


export default Medicine;