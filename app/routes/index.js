let express = require('express');
let router = express.Router();

const { getArtists, createArtist, updateArtist, getArtistById, deleteArtist, getArtworksByArtist, getALLArtworks, createArtwork, updateArtwork, getArtworkById, deleteArtwork } = require('../db/dbConnector_Sqlite.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const artists = await getArtists();
  console.log("route / called - got artists", artists.length);
  res.render('index', { title: 'Art and Artist Management System', artists });
});

/* GET artworks. */
router.get('/artworks', async function(req, res, next) {
  const artworks = await getALLArtworks();
  console.log("route /artworks called - got artworks", artworks.length);
  res.render('allArtworks', { artworks });
});

/* GET artworks for a specific artist. */
router.get('/artist/:artistID', async function(req, res, next) {
  const artistID = parseInt(req.params.artistID);
  const artworks = await getArtworksByArtist(artistID);
  console.log("route /artist/:artistID called - got artworks", artworks.length);
  res.render('artworks', { artistID, artworks });
});

/* Render a form to create a new artist. */
router.get('/artistCreate/new', async function(req, res, next) {
  res.render('createArtist', { title: 'Create Artist' });
});

/* Handle form submission to create a new artist. */
router.post('/artist', async function(req, res, next) {
  const artist = await createArtist(req.body);
  console.log("route /artist/new called - created artist", artist);
  res.redirect('/');
});

/* Render a form to update an existing artist. */
router.get('/artist/:artistID/edit', async function(req, res, next) {
  const artistID = parseInt(req.params.artistID);
  const artist = await getArtistById(artistID);
  console.log("route /artist/:artistID/edit called - got artist", artist);
  res.render('updateArtist', { artist: artist });
});

/* Handle form submission to update an existing artist. */
router.put('/artist/:artistID', async function(req, res, next) {
  const artistID = req.params.artistID;
  const updatedData = { ...req.body, artistID };
  const artist = await updateArtist(updatedData);
  console.log("route /artist/:artistID/edit called - updated artist", artist);
  res.redirect('/');
});

/* Handle deletion of an artist. */
router.delete('/artist/:artistID', async function(req, res, next) {
  const artistID = req.params.artistID;
  const artist = await deleteArtist({ artistID });
  console.log("route /artist/:artistID called - deleted artist", artist);
  res.redirect('/');
});

/* Render a form to create a new artwork. */
router.get('/artwork/new', async function(req, res, next) {
  res.render('createArtwork', { title: 'Create Artwork' });
});

/* Handle form submission to create a new artwork. */
router.post('/artwork', async function(req, res, next) {
  const artwork = await createArtwork(req.body);
  console.log("route /artwork/new called - created artwork", artwork);
  res.redirect('/');
});

/* Render a form to update an existing artwork. */
router.get('/artwork/:artworkID/edit', async function(req, res, next) {
  const artworkID = parseInt(req.params.artworkID);
  const artwork = await getArtworkById(artworkID);
  console.log("route /artwork/:artworkID/edit called - got artwork", artwork);
  res.render('updateArtwork', { artwork });
});

/* Handle form submission to update an existing artwork. */
router.put('/artwork/:artworkID', async function(req, res, next) {
  const artworkID = req.params.artworkID;
  const updatedData = { ...req.body, artworkID };
  const artwork = await updateArtwork(updatedData);
  console.log("route /artwork/:artworkID/edit called - updated artwork", artwork);
  res.redirect('/artworks');
});

/* Handle deletion of an artwork. */
router.delete('/artwork/:artworkID', async function(req, res, next) {
  const artworkID = req.params.artworkID;
  const artwork = await deleteArtwork({ artworkID });
  console.log("route /artwork/:artworkID called - deleted artwork", artwork);
  res.redirect('/');
});

module.exports = router;
