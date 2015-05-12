var Sequelize = require('Sequelize');
var sequelize = new Sequelize (null,null,null,
{dialect:"sqlite",storage:"quiz.sqlite"});
var Quiz =sequelize.import (path.join(__dirname,
'quiz'));
exports.Quiz=Quiz;

sequelize.Quiz=Quiz;
sequelize.sync().sucess(function() {
 Quiz.count().sucess(function(count){
if(count===0){
Quiz.create ({pregunta:'Capital de Italia',
respuesta:'Roma'});
Quiz.create ({pregunta:'Capital de Portugal',
respuesta:'Lisboa'}).then(function(){
console.log('Base de datos inicializada')});
};
});
});
