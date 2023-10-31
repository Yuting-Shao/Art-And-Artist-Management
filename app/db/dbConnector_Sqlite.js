const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function connect() {
    return open({
        filename: './db/db.db',
        driver: sqlite3.Database
    });
}

async function getArtists() {
    const db = await connect();
    const artistdata = await db.all(`SELECT artistID, name, style
    FROM Artist
    ORDER BY artistID DESC
    LIMIT 20;`);

    console.log("db connector got data", artistdata.length);

    return artistdata;
}

module.exports = {
    getArtists
};
