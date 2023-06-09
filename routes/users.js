var express = require('express');
var router = express.Router();
const {
  getData,
  getNotes,
  findNoteWithId,
  createNewNote
}= require("../controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getusers',getData)

router.get("/notes",getNotes)
router.get("/notes/:id",findNoteWithId)
router.post("/notes",createNewNote)
module.exports = router;
