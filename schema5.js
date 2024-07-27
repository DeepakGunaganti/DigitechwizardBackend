import mongoose from "mongoose"

const ClientMaster = mongoose.Schema({
    Code:{type:String},
    Name:{type:String},
    Agent:{type:String},
    Contact:{type:Number},
    DateOfJoining:{type:String},
    PWD:{type:String},
    Expo:{type:Number},
    ClientComm:{type:String},
    Chips:{type:Number},
    Status:{type:String},
    Match:{type:Number},
    SSN:{type:Number}
})
const ClientMasterSchema = mongoose.model("Client Agent" , ClientMaster)
export default ClientMasterSchema