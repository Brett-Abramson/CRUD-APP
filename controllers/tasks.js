//==========    TASK CONTROLLER =================
//===============================================

const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("tasks/index.ejs")
})

router.get("/new", (req, res) => {
    res.render("tasks/new.ejs")
})

module.exports = router