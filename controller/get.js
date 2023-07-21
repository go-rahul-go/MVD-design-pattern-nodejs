const express=require("express");  
const dbConnector=require("../model/mobileDB");
const route = express.Router();


route.get("",async(req,resp)=>{
   let result = await dbConnector();
   let data = await result.find();
   resp.render("index",{data});
})


module.exports = route;