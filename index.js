const express = require("express")
const app = express()

app.listen(8080,()=>console.log("server is running"))

app.get("/",(req,res)=>{
    res.status(200).json({messgae:"success"})
})

app.get("/current-date",(req,res)=>{

    const date = new Date()
    const currentDate = date.toDateString()
    const response = {
        currentDate:currentDate                                    //if property and value is same then 'currentDate' could pass dono defined krne ki jarurat nhi
    }


    res.status(200).json(response)
})

app.get("/current-time",(req,res)=>{

     const date = new Date()
    const currentTime = date.toTimeString()
    const response = {
        currentDate:currentTime                                   //if property and value is same then 'currentDate' could pass dono defined krne ki jarurat nhi
    }

    res.status(200).json(response)
})

app.get("/current-datetime",(req,res)=>{

     const date = new Date()
    // const currentTime = date.toTimeString()
    const response = {
        currentDate:date                                   //if property and value is same then 'currentDate' could pass dono defined krne ki jarurat nhi
    }

    res.status(200).json(response)
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