var express=require('express')
const app=express();
var bodyparser=require("body-parser")
app.set("view engine","ejs")
app.set("views","./src/views")
const path = require('path')


var userrouter = require("./routes/userrouter")
app.use("/user",userrouter);
var prodrouter = require("./routes/prodrouter")
app.use("/prod",prodrouter);











app.use(express.static(path.join(__dirname,"/public")))
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){

    res.render("index",{nav:[{link:"",title:"Home"},{link:"/prod",title:"Products"},{link:"/user",title:"login"}]})
});
app.listen(process.env.PORT || 3000, () => console.log('Server Running on http://localhost:3000'));