var models = require('../models/models.js'); 

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
exports.load = function(req, res, next, quizId) {
models.Quiz.find({
where: {
id: Number(quizId)
},
include: [{
model: models.Comment
}]
}).then(function(quiz) {
if (quiz) {
req.quiz = quiz;
next();
} else{next(new Error('No existe quizId=' + quizId))}
}
).catch(function(error){next(error)});
};

exports.show = function(req,res) {

res.render('quizes/show', { quiz: req.quiz} );
};

exports.answer = function(req,res) {
if (req.query.respuesta === req.quiz.respuesta)
res.render('quizes/answer', {respuesta: 'Correcto', quizId: req.quiz.id});
else res.render('quizes/answer', {respuesta: 'Incorrecto', quizId: req.quiz.id});
};

exports.new = function(req, res) {
var quiz = models.Quiz.build( 
{pregunta: "Pregunta", respuesta: "Respuesta"}
);
res.render('quizes/new', {quiz: quiz, errors: []});
};

exports.edit = function(req, res) {
var quiz = req.quiz;
res.render('quizes/edit', {quiz: quiz, errors: []});
};

exports.create = function(req, res) {
var quiz = models.Quiz.build( req.body.quiz );
quiz.save({fields: ["pregunta", "respuesta"]})
.then( function(){ res.redirect('/quizes');})
};

exports.update = function(req, res) {
req.quiz.pregunta = req.body.quiz.pregunta;
req.quiz.respuesta = req.body.quiz.respuesta;
req.quiz
.validate()
.then(
function(err){
if (err) {
res.render('quizes/edit', {quiz: req.quiz, errors: err.errors});
} else {
req.quiz
.save( {fields: ["pregunta", "respuesta"]})
.then( function(){ res.redirect('/quizes');});
}
}
);
};


