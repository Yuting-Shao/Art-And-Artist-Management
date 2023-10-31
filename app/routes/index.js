let express = require('express');
let router = express.Router();

const { getArtists } = require('../db/dbConnector_Sqlite.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const artists = await getArtists();
  console.log("route / called - got artists", artists.length);
  res.render('index', { title: 'Art and Artist Management System', artists });
});

module.exports = router;
