const express = require("express");
const app = express();
const cors = require("cors");
// const bookmarksController = require("");

app.use(express.json());
app.use(cors());

// app.use("/bookmarks", bookmarksController);

app.get("/", (req, res) => {
    res.send("Welcome to the Bookmarks Back-End");
});

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found." });
});

module.exports = app;
