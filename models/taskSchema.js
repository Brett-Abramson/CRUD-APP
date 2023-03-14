const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true},
    date: { type: String, required: true},
    details: String,
    category: String,
    tags: [String],
    // sinceLastTime: String
})

const Tasks = mongoose.model("Tasks", taskSchema)

module.exports = Tasks