import mongoose from "mongoose"

const Master = mongoose.Schema({
    Code:{type:String},
    Name:{type:String},
    Admin:{type:String},
    Contact:{type:Number},
    DateOfJoining:{type:String},
    PWD:{type:String},
    SubAdminShare:{type:Number},
    SubAdminComm:{type:String},
    Chips:{type:Number},
    Status:{type:String},
    CasinoShr:{type:Number},
    Match:{type:Number},
    SSN:{type:Number}
})
const MasterSchema = mongoose.model("Master Master" , Master)
export default MasterSchema