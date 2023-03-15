const express = require("express")
const router = express.Router()
const Checklist = require("../models/checklistSchema.js")

//==============================================================
//===   GET ROUTES  =========
//===============================================================
router.get("/", (req,res) => {
    res.render("checklists/index.ejs")
})

router.get("/new", (req, res) => {
    res.render("checklists/new.ejs")
})
//======================================================
//===   ACTION ROUTES   ===
//======================================================
//===   ADD LIST    ===
router.post("/", (req, res) => {
    Checklist.create(req.body).then((createdChecklist) => {
        res.render("checklists/index.ejs", {
            checklists: createdChecklist
        })
    })
})

module.exports = router