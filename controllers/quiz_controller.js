var models = require('../models/models.js'); 
exports.load = function(req,res,next,quizId) {
models.Quiz.find(quizId).then(
function(quiz) {
if (quiz) { req.quiz = quiz; next(); }
else next(new Error('No existe el quiz con ID='+quizId));
}).catch(function(error) { next(error);});
};

exports.index = function(req,res) {
if (req.query.busqueda != null) {
var search = '%'+req.query.busqueda+'%'; 
models.Quiz.findAll({where: ["pregunta like ?", search]})
.then(function (quizes) {
res.render('quizes/index', {quizes: quizes});
});
}
else {
models.Quiz.findAll().then(function (quizes) {
res.render('quizes/index', {quizes: quizes});
});
}
};

exports.show = function(req,res) {

res.render('quizes/show', { quiz: req.quiz} );
};

exports.answer = function(req,res) {
if (req.query.respuesta === req.quiz.respuesta)
res.render('quizes/answer', {respuesta: 'Correcto', quizId: req.quiz.id});
else res.render('quizes/answer', {respuesta: 'Incorrecto', quizId: req.quiz.id});
};
