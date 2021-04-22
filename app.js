const express = require("express")
const ejs = require("ejs")

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")


app.get("/",(req,res)=>{
    res.render('home')
})
app.get("/buy",(req,res)=>{
    res.render('buy')
})
app.get("/sell",(req,res)=>{
    res.render('sell')
})
app.get("/rental",(req,res)=>{
    res.render('rental')
})
app.get("/property-management",(req,res)=>{
    res.render('property-management')
})













app.listen(3000, ()=>{
    console.log("App is up and running!!");
})
