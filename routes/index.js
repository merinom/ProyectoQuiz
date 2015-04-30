var express = require('express');
var router = express.Router();

/* GET Pagina de inicio */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
