var models = require('../models/models.js');
exports.index = function (req,res){
models.Quiz.findAll().then(function(quizes){
res.render('quizes/index.ejs',{quizes:quizes});
})
};
exports.question=function(req,res){
models.Quiz.findAll().sucess(function(quiz){
res.render('quizes/question',{pregunta:quiz[0].pregunta})
})
};

exports.show=function(req,res){
models.Quiz.find(req.params.quizId).then(function(quiz){
res.render('quizes.show', {quiz:quiz})
}
exports.author=function(req,res){
res.render('author',{pregunta: 'Capital de Italia'});
};

exports.answer=function(req,res){
models.Quiz.find(req.params.quizId).then(function(quiz){
if(req.query.respuesta===quiz.respuesta){
  res.render('quizes/answer',{quiz:quiz, respuesta: 'Correcto'});
else{
  res.render('quizes/answer',
{quiz:quiz ,respuesta: 'Incorrecto'});
 }
})
};

