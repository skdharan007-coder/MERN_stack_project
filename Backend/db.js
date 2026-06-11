const mong = require("mongoose")

mong.connect("mongodb://localhost:27017/Ecomusers")
.then(()=>{console.log("mongodb connected")})
.catch((err)=>{console.log("connection failed")})