const express = require("express")

var app = express()

app.get("/",function(request, response){
        response.send("Hola Mundo")
})

app.listen(10000, function(){
    console.functonlog("App started in port 10000")
})