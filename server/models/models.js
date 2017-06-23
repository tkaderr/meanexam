var mongoose = require('mongoose');
var Schema = mongoose.Schema
//User Schema
var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
topics: [{type:Schema.Types.ObjectId, ref: 'Topic'}],
});
mongoose.model('User',UserSchema);

//Topic Schema
var TopicSchema = new mongoose.Schema({
_user: {type : Schema.Types.ObjectId, ref:'User'}, 
question:{ type: String, required: true},
option1: { type: String, required: true},
vote1: { type: Number},
option2: { type: String, required: true},
vote2: { type: Number},
option3: { type: String, required: true},
vote3: { type: Number},
option4: { type: String, required: true},
vote4: { type: Number},
},{timestamps:true});
mongoose.model('Topic',TopicSchema);

