var express = require('express');
var router = express.Router();


var quizController = require('../controllers/quiz_controller');
/* GET Pagina de inicio */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
router.get('/author', function(req, res) {
  res.render('author', { title: 'Quiz' });
});
router.get('/quizes',
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',   quizController.answer);


module.exports = router;
