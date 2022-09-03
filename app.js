const { response } = require("express");
const express=require("express");
const { link } = require("fs");
const https=require("https");//native module already installed
const app=express();

app.get("/",function(req,res){
    const query="london";
    const appid="48d112263772b27f3705738047a096f9";
    const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?appid="+appid+"&q="+query+"&units=unit";
    https.get(url,function(respnse){
        console.log(respnse.statusCode);

        respnse.on("data",function(data){
            // console.log(data); //return hexadecimal code
           const weatherData= JSON.parse(data);
        //    console.log(weatherData);
const temp=weatherData.main.temp;
console.log(temp);
// main.temp----------->by copy path in extension by opening api link;

const desc=weatherData.weather[0].description;
console.log(desc);
const icon=weatherData.weather[0].icon;
const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
res.write("<p> the weather is currently "+desc+"</p>");
// yahan har cheez kaam kr rhi sirf h3 kaam nhi kr rha why????????????????????????????????????????/
res.write("<h1>the temp in london is:"+temp +"degree celcius</h1>");
res.write("<img src="+imageurl+">" );
res.send();

        //    const object={
        //     name:"manvi",
        //     food:"pav bhaji"
        //    }
        //    console.log(JSON.stringify(object));
        // js object to string
        //    console.log(object);
        })
    })
    // res.send("server is up")  ---------->w can have only onr res.send in any get method.

})


app.listen(3000,function(){
    console.log("server is running on port 3000");

})