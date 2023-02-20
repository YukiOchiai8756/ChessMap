const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("init here");
})

router.post("/", (req, res) => {
    res.json(initJson);
})

// Initial configuration of chess board
const initJson = {"King"  :[{"White":"e1", "Black":"e8"}],
                  "Queen" :[{"White":"d1", "Black":"d8"}],
                  "Bishop":[{"White1":"c1", "Black1":"f8", "White2":"f1", "Black2":"c8"}],
                  "Knight":[{"White1":"b1", "Black1":"g8", "White2":"g1", "Black2":"b8"}],
                  "Rook"  :[{"White1":"a1", "Black1":"h8", "White2":"h1", "Black2":"a8"}],
                  "Pawn"  :[{"White1":"a2", "White2":"b2", "White3":"c2", "White4":"d2", "White5":"e2", "White6":"f2", "White7":"g2", "White8":"h2",
                             "Black1":"h7", "Black2":"g7", "Black3":"f7", "Black4":"e7", "Black5":"d7", "Black6":"c7", "Black7":"b7", "Black8":"a7"}]}


module.exports = router;