const express = require("express")
const app = express()

app.listen(8080,()=>console.log("server is running"))

app.get("/users",(req,res)=>{
    res.status(200).json({messgae:"success"})
})

/**
 * Request
 * 1.Endpoint
 * 2.http method
 * 
 * response 
 * 1. status code
 * 2. json response type
 * 
 Api Type
 1. SOAP -> XML (decrepted)
 2. Rest -> JSON (widely used)
 */