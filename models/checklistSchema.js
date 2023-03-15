const mongoose = require("mongoose")

const checklistSchema = mongoose.Schema({
    name: String,
    priority: Number
})

const Checklist = mongoose.model("Checklist", checklistSchema)

module.exports = Checklist