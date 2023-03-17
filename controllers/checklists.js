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
        res.redirect("/checklists")
    })
})
//=== ADD ITEM  ===
router.put("/:id", (req, res) => {
    Checklist.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.redirect("/checklists")
    })
})
//=== DELETE ITEM ===
router.delete("/:id/:itemIndex", (req,res) => {
    Checklist.findById(req.params.id).then((checklist) => {
        checklist.items.splice(req.params.itemIndex, 1)
        return checklist.save()
    }).then (() => {
        res.redirect(`/checklists/${req.params.id}`)
    })
})
//===   EDIT ITEM   ===
router.put("/:id/:itemIndex", (req,res) => {
    Checklist.findById(req.params.id).then((checklist) => {
        checklist.items.splice(req.params.itemIndex, 1, req.body.items.toString())
        return checklist.save()
    }).then (() => {
        res.redirect(`/checklists/${req.params.id}`)
    })
})
//===   DELETE LIST ===
router.delete("/:id", (req,res) => {
    Checklist.findByIdAndRemove(req.params.id).then(()=> {
        res.redirect("/checklists")
    })
})
module.exports = router