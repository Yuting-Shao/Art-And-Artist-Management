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

async function createArtist(data) {
    const db = await connect();
    const { name, biography, style, totalExhibitions } = data;
    await db.run(`INSERT INTO Artist (name, biography, style, totalExhibitions) VALUES (?, ?, ?, ?)`, [name, biography, style, totalExhibitions]);
    return { name, biography, style, totalExhibitions };
}

async function updateArtist(data) {
    const db = await connect();
    const { artistID, name, biography, style, totalExhibitions } = data;
    await db.run(`UPDATE Artist SET name = ?, biography = ?, style = ?, totalExhibitions = ? WHERE artistID = ?`, [name, biography, style, totalExhibitions, artistID]);
    return { artistID, name, biography, style, totalExhibitions };
}

async function deleteArtist(data) {
    const db = await connect();
    const { artistID } = data;
    await db.run(`DELETE FROM Artist WHERE artistID = ?`, [artistID]);
    return { artistID };
}

async function getArtworksByArtist(artistID) {
    const db = await connect();
    const artworkdata = await db.all(`SELECT artworkID, title, price, artistID
    FROM Artwork
    WHERE artistID = ?
    ORDER BY artworkID DESC
    LIMIT 20;`, [artistID]);

    console.log("db connector got data", artworkdata.length);

    return artworkdata;
}

async function getALLArtworks() {
    const db = await connect();
    const artworkdata = await db.all(`SELECT artworkID, title, price, artistID
    FROM Artwork
    ORDER BY artworkID DESC
    LIMIT 20;`);

    console.log("db connector got data", artworkdata.length);

    return artworkdata;
}

async function createArtwork(data) {
    const db = await connect();
    const { title, medium, dimensions, creationDate, price, availabilityStatus, artistID } = data;
    await db.run(`INSERT INTO Artwork (title, medium, dimensions, creationDate, price, availabilityStatus, artistID) VALUES (?, ?, ?, ?, ?, ?, ?)`, [title, medium, dimensions, creationDate, price, availabilityStatus, artistID]);
    return { title, medium, dimensions, creationDate, price, availabilityStatus, artistID };
}

async function updateArtwork(data) {
    const db = await connect();
    const { artworkID, title, medium, dimensions, creationDate, price, availabilityStatus, artistID } = data;
    await db.run(`UPDATE Artwork SET title = ?, medium = ?, dimensions = ?, creationDate = ?, price = ?, availabilityStatus = ?, artistID = ? WHERE artworkID = ?`, [title, medium, dimensions, creationDate, price, availabilityStatus, artistID, artworkID]);
    return { artworkID, title, medium, dimensions, creationDate, price, availabilityStatus, artistID };
}

async function deleteArtwork(data) {
    const db = await connect();
    const { artworkID } = data;
    await db.run(`DELETE FROM Artwork WHERE artworkID = ?`, [artworkID]);
    return { artworkID };
}

module.exports = {
    getArtists,
    createArtist,
    updateArtist,
    deleteArtist,
    getArtworksByArtist,
    getALLArtworks,
    createArtwork,
    updateArtwork,
    deleteArtwork
};
