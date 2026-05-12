const express = require("express")
const app = express()

app.listen(8080,()=>console.log("server is running"))

app.get("/users",(req,res)=>{
    res.status(200).json({messgae:"success"})
})

/**
 Api Type
 1. SOAP -> XML (decrepted)
 2. Rest -> JSON (widely used)
 */