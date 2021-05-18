const express = require('express');
const app = express();
const path = require("path")
const login = require("../mongodb/mongoose")
const bodyparser= require("body-parser")
const staticpath = path.join(__dirname,"../public")
const port = process.env.PORT || 8000;
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs");
app.use(express.static(staticpath))
const viewpath = path.join(__dirname,"../templates/views")
app.set("views",viewpath);
app.get('/',(req,res)=>{
  res.render("index")
})
app.post('/', (req,res)=>{
const myData = new login(req.body);
myData.save().then(()=>{
  res.send("This item has been saved in database")
}).catch(()=>{
  res.status(400).send("The item is not saved")
})
})


app.listen(port,()=>{
  console.log(`server started at port ${port}`)
})