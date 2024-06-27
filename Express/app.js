const express = require ('express')
const app= express()
const port=80
app.get("/",(req,res)=>{
    res.send("Hello World")
});
app.get("/about",(req,res)=>{
    res.send("Noice")
});
app.listen(port, ()=>{
    console.log(`App at ${port}`)
})