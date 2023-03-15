const express = require("express")
const router = express.Router()
const Checklist = require("../models/checklistSchema.js")



//==============================================================
//===   GET ROUTES  =========
//===============================================================
router.get("/", (req,res) => {
    Checklist.find({}).then((checklists) => {
        res.render("checklists/index.ejs", {
            checklists
        })
    })
})

router.get("/new", (req, res) => {
    res.render("checklists/new.ejs")
})
router.get("/:id", (req, res) => {
    Checklist.findById(req.params.id).then((checklist) => {
        res.render("checklists/show.ejs", {
            checklist
        })
    })
})
//======================================================
//===   ACTION ROUTES   ===
//======================================================
//===   ADD LIST    ===
router.post("/", (req, res) => {
    Checklist.create(req.body).then(() => {
        res.redirect("/checklists", {
            
        })
    })
})

module.exports = router