const express = require("express");
const app = express();
const cors = require("cors")
const {proxy} = require('http-proxy-middleware');


app.use(cors())
app.get("/", proxy({target:'http://localhost:4200', changeOrigin:true}))
app.listen(8081,()=>{
    console.log("proxy started")
})
