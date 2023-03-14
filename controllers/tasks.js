//==========    TASK CONTROLLER =================
//===============================================

const express = require("express");
const { translateAliases } = require("../models/taskSchema.js");
const router = express.Router();
const Task = require("../models/taskSchema.js")
//==============================================================
//===   GET ROUTES  =========
//===============================================================
router.get("/", (req, res) => {
    Task.find({}).then((foundTasks) => {
        res.render("tasks/index.ejs", {
            tasks: foundTasks
        })
    })
})
router.get("/new", (req, res) => {
    res.render("tasks/new.ejs")
})
//===   SHOW/EDIT PAGE ===
router.get("/:id", (req, res) => {
    Task.findById(req.params.id).then((foundTask) => {
        res.render("tasks/show.ejs", {
            task: foundTask
        })
    })
})
//======================================================
//===   ACTION ROUTES   ===
//======================================================
//===   ADD TASK    ===
router.post("/", (req, res) => {
    Task.create(req.body).then((createdTask) => {
        res.redirect("/tasks")
    })
})
//===   DELETE TASK ===
router.delete("/:id", (req,res) => {
    Task.findByIdAndRemove(req.params.id).then(() => {
        res.redirect("/tasks")
    })
})

module.exports = router