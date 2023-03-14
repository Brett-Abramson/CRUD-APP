const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

const Tasks = mongoose.model ("Tasks")

module.exports = Tasks