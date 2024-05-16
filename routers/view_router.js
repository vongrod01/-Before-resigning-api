const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path')
let systemConfig = JSON.parse(fs.readFileSync("SystemConfig.json", "utf-8"));

router.get('/', (req, res) => {
    // console.log(req)
    res.render('index.ejs', systemConfig.description)
})
router.route("/index").get((req, res) => {
    console.log('router.route');
    res.render("index.ejs", systemConfig.description);
});

router.route("/part").get((req, res) => {
    res.sendFile(path.join(__dirname, '../views/part.html'));
});
router.route("/pdf").get((req, res) => {
    res.sendFile(path.join(__dirname, '../views/pdf_viewer.html'));
});



module.exports = router;
