// load data/ link routes to our data sources

var friendsData = require("../data/friends");

// routing

module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
    
        var bestMatch = {
          friendName: "",
          photo: "",
          occupation: "",
          friendDifference: Infinity
        };
    
        // POST and parse survey entries
        var userData = req.body;
        var userScores = userData.scores;
    
        
        var totalDifference;
    
        // loop through the database.
        for (var i = 0; i < friends.length; i++) {
          var currentFriend = friends[i];
          totalDifference = 0;
    
          console.log(currentFriend.name);
    
          // loop through all the answers of each possible friend
          for (var j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];
    
            totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
          }
    
    
          if (totalDifference <= bestMatch.friendDifference) {
         
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDifference;
          }
        }
    
        friends.push(userData);
    
        res.json(bestMatch);
          });
};