//jshint esversion:6

const express=require("express");
const app=express();

app.get("/",function(request,response){
    response.send("Hello");
});
app.get("/con", function (request, response) {
    response.send("Hello!!!!!!!!!!  :)");
});
app.listen(3000,function()
{
    console.log("Server started at 3000");
});
