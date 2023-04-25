// Import our DB
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks;
    } catch (error) {
        return error;
    }
};

const getABookmark = async (id) => {
    try {
        const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
        return bookmark;
    } catch (error) {
        return error;
    }
};

const createBookmark = async (bookmarkToAdd) => {
    const { name, url, category, is_favorite } = bookmarkToAdd;

    try {
        const newBookmark = await db.one
            ("INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
                [name, url, category, is_favorite]);
        return newBookmark;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllBookmarks,
    getABookmark,
    createBookmark
};
