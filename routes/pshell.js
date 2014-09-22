var express = require('express');
var router = express.Router();
var edge = require("edge");

var hello = edge.func('ps', function () {/*
 $dir=Get-ChildItem
 "$($dir|fw)"
*/});


/* GET users listing. */
router.get('/', function (req, res) {
  var erg = "Powershell-Wrapper:\ntest"

  hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result[0]);
    res.send(result[0]);
  });

  //res.send(erg);
});

module.exports = router;
