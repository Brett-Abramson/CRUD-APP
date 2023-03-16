const mongoose = require("mongoose")

const checklistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    items: [{ type: String}]
})

const Checklist = mongoose.model("Checklist", checklistSchema)

module.exports = Checklist