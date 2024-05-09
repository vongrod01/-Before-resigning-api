const express = require("express");
const router = express.Router();
const fs = require("fs");
const PartClass = require('../my_modules/Part.js')

let systemConfig = JSON.parse(fs.readFileSync("SystemConfig.json", "utf-8"));
let connDetail = systemConfig.database[0]

router.route("/Part")
    .get(async (req, res) => {
        // Get, Search
        let Part = new PartClass.PartVO();
        let PartEXE = new PartClass.PartEXE(connDetail);
        // Object.keys(student).length
        if(Object.keys(req.body).length > 0){
            Part.jsonAssignToAttr(req.body)
        }
        else{
            Part.jsonAssignToAttr(req.query)
        }
        // console.log(req.body == true)
        // console.log({} == {})
        // Part.jsonAssignToAttr(req.query)
        if (Part.RxNo === '' || Part.RxNo === null) {
            await PartEXE.search(Part)
            res.json(PartEXE.dataSet)
        }
        else {
            if (await PartEXE.get(Part.RxNo) != null) {
                PartEXE.result.assignTo(Part)
            }
            res.json(Part.toJson())
        }

    })
    .post(async (req, res) => {
        // Add
        let Part = new PartClass.PartVO();
        let PartEXE = new PartClass.PartEXE(connDetail);
        Part.jsonAssignToAttr(req.query)
        res.json({ part: 'post' })
    })
    .put(async (req, res) => {
        // Edit
        res.json({ part: 'put' })
    })
    .patch(async (req, res) => {
        res.json({ part: 'patch' })
    })


module.exports = router;
