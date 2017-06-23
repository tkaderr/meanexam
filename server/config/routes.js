// Change controller file name if it is changed and same with the routes as well
var users = require('../controller/users.js');
var topics = require('../controller/topics.js');
var path = require('path');

module.exports = function(app){

//User Route
  app.post('/user_new', function(req, res){
    console.log("in routes");
    users.create(req,res);
  });

  //topic routes
  app.get('/topic', function(req, res){
    topics.show(req,res);
  });

  app.post('/topic/:name', function(req, res){
    topics.create(req,res);
  });

  app.get('/topic/:id', function(req, res){
    topics.showOne(req,res);
  });

  app.post('/upvote1', function(req, res){
    topics.upvote1(req,res);
  });
  app.post('/upvote2', function(req, res){
    topics.upvote2(req,res);
  });
  app.post('/upvote3', function(req, res){
    topics.upvote3(req,res);
  });
  app.post('/upvote4', function(req, res){
    topics.upvote4(req,res);
  });

  app.put('/destroy/topic/:id', function(req, res){
    topics.destroyTopic(req,res);
  });



 app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });

};