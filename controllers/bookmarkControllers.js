
const express = require("express");
const bookmark = express.Router();
// const bookmarkArray = require("");

// GET ALL
bookmark.get("/", (req, res) => {
    if (res) {
        res.status(202).json(bookmarkArray);
    } else {
        res.status(400).json({ error: "Model not found" });
    }
});

// INDIVIDUAL
bookmark.get("/:id", (req, res) => {
    const { id } = req.params;
    const bookmark = bookmarkArray[id];

    if (bookmark){
        res.status(202).json(bookmark);
    } else {
        res.redirect(302, "/*");
    }
});


module.exports = bookmark;
