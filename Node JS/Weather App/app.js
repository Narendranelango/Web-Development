const express=require("express");
const https=require("https");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
  const query=req.body.cityname;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=edf1b85cadb5c845c0263d8623e5c0ac";
  https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){
  const weatherData=JSON.parse(data)
  const temp=weatherData.main.temp;
  const wd=weatherData.weather[0].description
  const icon=weatherData.weather[0].icon
  const imageURL=" http://openweathermap.org/img/wn/" +icon+ "@2x.png"
  res.write("<h1>The temperature in " +query+ " is "+temp+" degree celcius.</h1>");
  res.write("<img src=" +imageURL+ ">");
  res.write("The weather seems to be <b>"+wd+".</b>");
  res.send();
  })
  })
})
app.listen(3000,function(){
  console.log("Server running in 3000");
});
