import express from "express"
import  MiniAdminSchema from "./schema.js";
import  { MiniAdminData,MasterData, SuperAgentData, AgentMasterData, ClientMasterData } from "./data.js";
import MasterSchema from "./schema2.js";
import SuperAgentSchema from "./schema3.js";
import AgentMasterSchema from "./schema4.js";
import ClientMasterSchema from "./schema5.js";

const MiniAdminRoute = express.Router();


MiniAdminRoute.post("/postMiniAdminData",async(req,res)=>{

const details = await MiniAdminSchema.insertMany(MiniAdminData);
res.send({message:"details posted successfully",data:details,status:200})


})

MiniAdminRoute.get("/getMiniAdminData1",async(req,res)=>{
    const details = await MiniAdminSchema.find()
    res.send({message:"details recieved successfully",data:details,status:200})
})

MiniAdminRoute.post("/postMasterMaster", async(req,res)=>{
    const details = await MasterSchema.insertMany(MasterData);
    res.send({message:"details posted successfully",data:details,status:200})
})
MiniAdminRoute.get("/getMasterMaster", async(req,res)=>{
    try{
        const details = await MasterSchema.find()
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
   
   
})

MiniAdminRoute.post("/postSuperAgent", async(req,res)=>{
    try{
        const details = await SuperAgentSchema.insertMany(SuperAgentData)
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
   
   
})

MiniAdminRoute.get("/getSuperAgent", async(req,res)=>{
    try{
        const details = await SuperAgentSchema.find()
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
     
})
MiniAdminRoute.post("/postAgentMaster", async(req,res)=>{
    try{
        const details = await AgentMasterSchema.insertMany(AgentMasterData)
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
   
   
})

MiniAdminRoute.get("/getAgentMaster1", async(req,res)=>{
    try{
        const details = await AgentMasterSchema.find()
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
     
})
MiniAdminRoute.post("/postClientMaster", async(req,res)=>{
    try{
        const details = await ClientMasterSchema.insertMany(ClientMasterData)
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
   
   
})
MiniAdminRoute.get("/getClientMaster", async(req,res)=>{
    try{
        const details = await ClientMasterSchema.find()
        res.send({message:"details recieved successfully",data:details,status:200})
        console.log(details)
    } catch (err){
        console.log(err, "err is occured");
        
    }
   
   
})


export default MiniAdminRoute