import express from "express";
const app=express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("working");
})
app.listen(1000, (req, res)=>{
    console.log("Server Starts");
})