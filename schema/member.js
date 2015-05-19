var mongoose = require('mongoose');

var MemberSchema = mongoose.Schema({
  name:String,
  age:String,
  telphone:String,
  interest:String,
  msg:String,
  createAt:{
    type:Date,
    default:Date.now()
  }
})

MemberSchema.statics={
	fetch:function(cb){
		return this
		.find({},cb)
	},
}
module.exports = MemberSchema
