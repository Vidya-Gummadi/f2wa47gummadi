var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 15;
  res.send(`Math.sqrt() applied to ${random} is ${Math.sqrt(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.sqrt() applied to ${req.params.id} is ${Math.sqrt(req.params.id)}`);
});



module.exports = router;