var express=require('express');
var mongoose=require('mongoose');
var app=express();
var port=3000;
var paySlip=require('./model.js');
var payIdController=require('./payIdController.js');
mongoose.connect('mongodb://localhost/PS');
mongoose.connection.on('connected',function(){
console.log('connected to database');
});
mongoose.connection.on('error',function(){
	console.log('failure');
	});
app.get('/psId',function(req,res){
	paySlip.find({},function(err, data){
		if(err){
			res.send(err);
			console.log("error");
		}
		res.json(data);
		payIdController.payIdGenerator(data);
	});
	//res.send("Invalid");
	
});
app.listen(port,function(){
	console.log("Server Started at" +port);
});