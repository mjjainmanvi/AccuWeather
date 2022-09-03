// const { response } = require("express");
// ye apni app aaye hai ????????????????kyu???????????????
const express=require("express");
// const { link } = require("fs");
const https=require("https");//native module already installed
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
   
   
const query=req.body.cityName;
const appid="48d112263772b27f3705738047a096f9";
const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?appid="+appid+"&q="+query+"&units="+unit;
https.get(url,function(respnse){
    console.log(respnse.statusCode);

    respnse.on("data",function(data){
        // console.log(data); //return hexadecimal code
       const weatherData= JSON.parse(data);
    //    console.log(weatherData);
const temp=weatherData.main.temp;
console.log(temp);


const desc=weatherData.weather[0].description;
console.log(desc);
const icon=weatherData.weather[0].icon;
const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
res.write("<p> the weather is currently "+desc+"</p>");
// yahan har cheez kaam kr rhi sirf h3 kaam nhi kr rha why????????????????????????????????????????/
res.write("<h1>the temp in "+ query +" is:"+temp +"degree celcius</h1>");
res.write("<img src="+imageurl+">" );
res.send();

    
    })
})

} )



app.listen(3000,function(){
    console.log("server is running on port 3000");

})