import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema ({
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
    phoneNumber:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    sex: {
        type: String,
        required: true,
        min:1
    },
    abdmId:{
        type:String,
        required:true,
        medicalRecord:[
            {type: Schema.Types.ObjectId, ref: 'Medicine'}
          ]
    },
    prevailingIllness:[{
        type:String,
        required:false
    }]

}, { timestamps: true })

const User = new mongoose.Model('User' , userSchema)

export default User;