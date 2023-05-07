const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/",function(req,res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    res.send("result of the calculation is " + result)
})

app.post("/bmi",function(req,res){
    var w = Number(req.body.w)
    var h = Number(req.body.h)
    let bmi = w/(h*h)
    res.send(`<h3>the BMI of the person is </h3> ${bmi}`)
})

app.listen(3000)