var mongoose = require('mongoose');
var MemberSchema = require('../schema/member')

var Member = mongoose.model('Member',MemberSchema)

module.exports = Member
