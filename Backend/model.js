const a = require("mongoose")

const scheme = new a.Schema({
    email:String,
   password:String
})

module.exports = a.model("Users",scheme)