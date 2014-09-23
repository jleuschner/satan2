var express = require('express');
var router = express.Router();
var edge = require('edge');



//"$(Get-adcomputer -filter 'Name -like ""$inputFromJS""' -properties Name,OperatingSystem, OperatingSystemVersion | select-object -property Name,OperatingSystem,OperatingSystemVersion | convertTo-json)"


var ps_pcliste = edge.func('ps', function () {/*
"$(Get-adcomputer -filter ""Name -like '$inputFromJS'"" -properties Name,OperatingSystem, OperatingSystemVersion | select-object -property Name,OperatingSystem,OperatingSystemVersion | convertTo-json)"
*/});

router.get('/', function(req, res) {
  res.render('activedirectory', { title: 'Active Directory' });
});

router.get('/cmd/', function (req, res) {
  //console.log(req.query.search)
  ps_pcliste(req.query.search, function (error, result) {
    if (error) throw error;
    //console.log(result[0]);
    res.send(result[0]);
  });
});

module.exports = router;
