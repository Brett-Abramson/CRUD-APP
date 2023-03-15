const express = require("express")
const mongoose = require("mongoose")
const app = express()
const methodOverride = require("method-override")


const PORT = 3000
// BODY PARSER (What does that actually mean?)
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))
//======    CONTROLLERS     ======================
const tasksController = require("./controllers/tasks.js")
app.use ("/tasks", tasksController)

// ===========  GET ======================
app.get("/", (req,res) => {
    res.render("index.ejs")
})


// connect to the mongo task subdb
const mongoTaskURI = "mongodb://localhost:27017/" + "tracker"
mongoose.connect(mongoTaskURI)

app.listen(PORT, () => {
    console.log(`listening on port: ` + PORT)
})