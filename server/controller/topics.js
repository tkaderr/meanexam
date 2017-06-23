var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User')

module.exports = {
    show: function(req, res) {
    Topic.find({}).sort('-createdAt').populate('_user').populate('posts').exec(function(err, topics){
       if(!err){
            res.json(topics);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
  },

  create: function(req, res) {
    User.findOne({ username : req.params.name}, function(err, user){
        var topic = new Topic(req.body);
        topic.vote1 = 0;
        topic.vote2 = 0;
        topic.vote3 = 0;
        topic.vote4 = 0; 
        topic._user = user._id;
        topic.save(function(err){
            user.topics.push(topic);
            user.save(function(err){
                if(err){
                    console.log("Error saving topics in user");
                }
                else {
                    res.json(true);
                }
            })
        })
    })
  }, 

  showOne: function(req,res){
      Topic.find({_id: req.params.id}).populate({path : 'posts', populate : {path : '_user'}}).populate('_user').exec(function(err, topic){
        if(!err){
            console.log("Single Topic", topic);
            res.json(topic);
        }else{
            console.log(err);
            res.json(err);
        }
    });
  },


  upvote1: function(req,res){
    console.log("Inside upvote")
    User.findOne({username: req.body.user}, function(err, user){
        console.log("next step:",user);
        Topic.findOne({_id: req.body.topicid}, function(err, topic){
            console.log("step2:",topic);
            console.log(topic.vote);
            topic.vote1 = topic.vote1 + 1;
            //topic.upvotes.push(user._id);
            console.log(topic.vote1);
            topic.save(function(err){
                if(err){
                    console.log("Error saving upvote on a post");
                }
                else {
                    res.json(true);
                }
           })
        })
    })
},

  upvote2: function(req,res){
    console.log("Inside upvote")
    User.findOne({username: req.body.user}, function(err, user){
        console.log("next step:",user);
        Topic.findOne({_id: req.body.topicid}, function(err, topic){
            console.log("step2:",topic);
            console.log(topic.vote);
            topic.vote2 = topic.vote2 + 1;
            //topic.upvotes.push(user._id);
            console.log(topic.vote1);
            topic.save(function(err){
                if(err){
                    console.log("Error saving upvote on a post");
                }
                else {
                    res.json(true);
                }
           })
        })
    })
},

  upvote3: function(req,res){
    console.log("Inside upvote")
    User.findOne({username: req.body.user}, function(err, user){
        console.log("next step:",user);
        Topic.findOne({_id: req.body.topicid}, function(err, topic){
            console.log("step2:",topic);
            console.log(topic.vote);
            topic.vote3 = topic.vote3 + 1;
            //topic.upvotes.push(user._id);
            console.log(topic.vote1);
            topic.save(function(err){
                if(err){
                    console.log("Error saving upvote on a post");
                }
                else {
                    res.json(true);
                }
           })
        })
    })
},

  upvote4: function(req,res){
    console.log("Inside upvote")
    User.findOne({username: req.body.user}, function(err, user){
        console.log("next step:",user);
        Topic.findOne({_id: req.body.topicid}, function(err, topic){
            console.log("step2:",topic);
            console.log(topic.vote);
            topic.vote4 = topic.vote4 + 1;
            //topic.upvotes.push(user._id);
            console.log(topic.vote1);
            topic.save(function(err){
                if(err){
                    console.log("Error saving upvote on a post");
                }
                else {
                    res.json(true);
                }
           })
        })
    })
},

//   updateTopic : function(req, res){
//       Topic.update({_id: req.params.id}, req.body)
//     .then(response => {res.json(response)})
//     .catch(err=>console.log('error at update topic',err))
//   },

  destroyTopic : function(req, res){
    console.log("in server:", req.body)
    Topic.remove({_id: req.params.id})
    .then(response => {res.json(response)})
    .catch(err=>console.log('error at delete products',err))
}


};