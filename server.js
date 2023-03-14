const express = require("express")
const mongoose = require("mongoose")
const app = express()

const PORT = 3000
app.use(express.urlencoded({extended:true}))

//======    CONTROLLERS     ======================
const tasksController = require("./controllers/tasks.js")
app.use ("/tasks", tasksController)

// ===========  GET ======================
app.get("/", (req,res) => {
    res.render("index.ejs")
})


// connect to the mongo task subdb
const mongoTaskURI = "mongodb://localhost:27017/" + "tweets"
mongoose.connect(mongoTaskURI)

app.listen(PORT, () => {
    console.log(`listening on port: ` + PORT)
})