-- If our DB exists, we DROP it like its hot
DROP DATABASE IF EXISTS bookmarks_dev;
-- We then CREATE our DB
CREATE DATABASE bookmarks_dev;
-- THen, we connect to the DB that we just created
\c bookmarks_dev;

-- Then, we CREATE our TABLE
CREATE TABLE bookmarks (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
url TEXT,
category TEXT,
is_favorite BOOLEAN
);
