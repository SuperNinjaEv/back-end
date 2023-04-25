
const express = require("express");
const bookmark = express.Router();
const { getAllBookmarks, getABookmark } = require("../queries/bookmarks")
// GET ALL
bookmark.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks();

    if (allBookmarks) {
        res.status(202).json(allBookmarks);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

// INDIVIDUAL
bookmark.get("/:id", async (req, res) => {
    const { id } = req.params;
    const bookmark = await getABookmark(id);

    if (bookmark) {
        res.status(202).json(bookmark);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});


module.exports = bookmark;
