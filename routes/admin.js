var express = require('express');
var router = express.Router();
const path = require('path');
const body_parser = require('body-parser');
const cipher = require('../routes/cipher.js');

router.use(body_parser.json());
router.use(body_parser.urlencoded({extended: true}));

router.get('/', function(req, res, next) {
  	res.sendFile("Admin.html", {root: path.join(__dirname, "../public/html")});
});//

router.post('/descifrar', function(req, res) {
  var = req.body;
});
