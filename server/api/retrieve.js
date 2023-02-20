const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
    res.send("retrieve API online")
})

router.post("/", (req, res) => {
    
    fs.readFile("./scraping/updatedData.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed: ", err);
        } else {
            const jsonObj = JSON.parse(jsonString);
            res.json(jsonObj[req.body.countryCode]);
        }
    })
    
})


module.exports = router;