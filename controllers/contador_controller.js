var models = require('../models/models.js');
exports.cuenta = function(req,res){
	       models.Quiz.findAll().
	    then(function(quices1){
	    models.Comment.findAll().
	    then(function(quices2){
	    models.Comment.findAll().then(function(q){
	    models.Quiz.findAll().
	    then(function(quices){
	     var numPC=0;
	     var numC=0;
	     var numP=0;
	     var numMC= 0;
	     var numPS=0;
	    numP=quices1.length;
	    numC=quices2.length;
	    	for(var i=1;i<quices.length;i++){
	    		for(var j=0;j<q.length;j++){
                 if(q[j].QuizId===i){
              	numPC++;
              	break;
	    	}}}
	    	numMC= numC/numP;
	    numPS=(numP-numPC);
	     models.User.findAll().then(function(usuarios){
    	res.render('contador/contador',{usuarios:usuarios,
    		numeropreguntasCom:numPC,numeroComentarios:numC,
    		numeropreguntas:numP,numeroMedioComentarios:numMC,
    		numeropreguntasSin:numPS,
    	 errors:[]});
	    });});
	   
	   
});
});
	});
	}