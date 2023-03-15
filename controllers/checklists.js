const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("checklists/index.ejs")
})

module.exports = router