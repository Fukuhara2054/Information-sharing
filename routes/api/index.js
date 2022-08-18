var express = require("express");

var router = express.Router();
/*
const artwork = require("../../src/artwork.js");

router.get("/artwork/:art_id/:file_name", async function (req, res, next) {
  //console.log("index.js,router.get 1");
  const getArt = await artwork.getArt(req.params.art_id, req.params.file_name);
  //console.log("index.js,router.get 2");
  res.json({ text: getArt });
});
*/
module.exports = router;