// Import our DB
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks;
    } catch (error) {

    }
};

// const getABookmark = async () => {};

module.exports = {
    getAllBookmarks,
};
