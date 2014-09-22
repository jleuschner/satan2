var express = require('express');
var router = express.Router();
var edge = require('edge');



//"$(Get-adcomputer -filter 'Name -like *' | convertTo-json)"

var ps_pcliste = edge.func('ps', function () {/*
"$(Get-alias | convertTo-json)"
*/});

router.get('/', function(req, res) {
  res.render('activedirectory', { title: 'Active Directory' });
});

router.get('/cmd/', function (req, res) {
  //console.log(req)
  ps_pcliste(req.query.search+"*", function (error, result) {
    if (error) throw error;
    console.log(result[0]);
    res.send(result[0]);
  });
});

module.exports = router;
