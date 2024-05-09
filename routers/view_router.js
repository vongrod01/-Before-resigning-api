const express = require("express");
const router = express.Router();
const fs = require("fs");

let systemConfig = JSON.parse(fs.readFileSync("SystemConfig.json", "utf-8"));

router.get('/', (req, res) => {
    // console.log(req)
    res.render('index.ejs', systemConfig.description)
})
router.route("/index").get((req, res) => {
    console.log('router.route');
    res.render("index.ejs", systemConfig.description);
});

module.exports = router;
