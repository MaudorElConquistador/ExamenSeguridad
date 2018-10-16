var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
  	res.sendFile("Admin.html", {root: path.join(__dirname, "../public/html")});
});//

router.post('/descifrar', function(req, res) {
  var caca= req.body;
});

module.exports = router;
