const  mongoose = require("mongoose" )

mongoose.connect("mongodb+srv://muhalmas78657:Aanish%40123@cluster0.mw0phz9.mongodb.net/")

const todoSchema = mongoose.Schema({
     title: String,
     description: String,
     completed: Boolean 
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo  
}