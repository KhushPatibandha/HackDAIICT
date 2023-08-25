// THIS ONE IS CLEAR. NO CHNAGES NEEDED.
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    doctorId:{
        type:String,
        require:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
}, { timestamps: true })

const Admin = mongoose.model("Admin", adminSchema)
export default Admin;