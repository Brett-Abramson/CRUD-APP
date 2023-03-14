const express = require("express")
const mongoose = require("mongoose")
const app = express()

const PORT = 3000
// app.use(express.urlencoded({extended:true}))
// ===========  GET ======================
app.get("/", (req,res) => {
    res.send("Hello, World")
})

app.get("/index", (req, res) => {
    res.render("index.ejs")
})



app.listen(PORT, () => {
    console.log(`listening on port: ` + PORT)
})