const express=require("express")

const app=express();


app.use("/public",express.static(__dirname+"/public"));
app.use("/img",express.static(__dirname+"/public/img"))

app.set("view engine","ejs");


const getRoute = require("./controller/get");
app.use("/home",getRoute);

app.listen(5000)