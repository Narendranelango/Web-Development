const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express();
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html")
});
app.post("/",function(req,res){
const firstName=req.body.fName;
const lastName=req.body.lName;
const email=req.body.email;
const data={//Js format
  members:[//Mailchimp
    {
      email_address:email,
      status:"subscribed",
      merge_fields:{
        FNAME:firstName,
        LNAME:lastName
      }
    }
  ]
};
const jsonData=JSON.stringify(data);
const url="https://us17.api.mailchimp.com/3.0/lists/ca8d233c3b";
const options={
  method:"POST",
  auth:"naren:29dd8ae527a939af7c45700d0f259b60-us17"
}
const request=https.request(url,options,function(response)
{
  if(response.statusCode==200){
    res.sendFile(__dirname +"/success.html");
  }
  else{
      res.sendFile(__dirname +"/failure.html");
  }
response.on("data",function(data){
  console.log(JSON.parse(data));
})
})
request.write(jsonData);
request.end();
});
app.listen(3000,function(){
  console.log("Running on server 3000");
})
//29dd8ae527a939af7c45700d0f259b60-us17
//ca8d233c3b
