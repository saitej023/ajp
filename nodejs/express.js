const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("helllko ");
});
app.get("/about", (req,res) =>{
    res.send("this is about page ");
});
app.get("/contact", (req,res) =>{
    res.send("contect page ");
});
app.get("/", (req,res) =>{
    res.send("helllk ");
});

app.listen(9000,()=>{
    console.log("server running on http://localhost:9000");
});
