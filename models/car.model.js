import mongoose, { Mongoose, model } from "mongoose";

const carSchema= new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    torque:{type:String},
    profile:{type:String},
    mileage:{type:String},
    brand:{type:String}
})

export default mongoose.model.cars || mongoose.model('car',carSchema)
