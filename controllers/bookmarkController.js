
const express = require("express");
const bookmark = express.Router();
const {
    getAllBookmarks,
    getABookmark,
    createBookmark,
    deleteBookmark,
    updateBookmark } = require("../queries/bookmarks");
const { checkRequest, checkId } = require("../validations/checkBookmarks");

// GET
bookmark.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks();

    if (allBookmarks) {
        res.status(202).json(allBookmarks);
    } else {
        res.status(500).json({ error: "Server Error" });
    };
});

// SHOW
bookmark.get("/:id", checkId, async (req, res) => {
    const { id } = req.params;
    const bookmark = await getABookmark(id);

    if (bookmark) {
        res.status(202).json(bookmark);
    } else {
        res.status(500).json({ error: "Server Error" });
    };
});

// CREATE ROUTE
bookmark.post("/", checkRequest, async (req, res) => {
    const newBookmark = req.body;

    try {
        const addedBookmark = await createBookmark(newBookmark);
        res.status(202).json(addedBookmark);
    } catch (error) {
        res.status(400).json({ error: error });
    };
});

// DELETE ROUTE
bookmark.delete("/:id", checkId, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBookmark = await deleteBookmark(id);
        res.status(200).json(deletedBookmark);
    } catch (error) {
        res.status(400).json({ error: error });
    };
});

// UPDATE ROUTE
bookmark.put("/:id", checkId, checkRequest, async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedBookmark = await updateBookmark(id, body);
        res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ error: error });
    };
});


module.exports = bookmark;
