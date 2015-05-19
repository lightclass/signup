var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT||3000;
var path =require('path');
var app = express();
var Member =  require('./models/member');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/signup');

app.set('views','./views/pages');
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','jade');
app.listen(port);


console.log('waiting on port:'+port);

app.get('/',function(req,res){
	res.render('index',{
		title:'报名表单'
	})
})

app.post('/members/add/',function(req,res){
	var memberObj = req.body;
	console.log(memberObj);
	var _member =  new Member({
		name :memberObj.name,
		age :memberObj.age,
		telphone :memberObj.telphone,
		interest:memberObj.interest,
		msg :memberObj.msg,
	})

	_member.save(function(err,member){
		if(err){
			console.log('******'+err);
		}else{
			res.redirect('/members/list');
		}

	})
})

app.get('/members/list',function(req,res){
	Member.fetch(function(err,members){
		if(err){
			console.log(err)
		}	
		console.log(members);
		res.render('list',{
			title:' signup list',
			members:members
		});

	});
	
	
})