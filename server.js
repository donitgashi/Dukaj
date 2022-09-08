const express=require("express");
const app= express();
const https=require("https");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("linktree"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/linktree/index.html");

});


app.listen(process.env.PORT||3000,function(){
  console.log("Server is running");
});
