"use strict";

app.controller('newController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
   index();

   $scope.create = function() {
       friendsFactory.create($scope.friend, function(res) {
        console.log(res);
        $scope.friend = {};
        $location.url('/')
       });
   };
   
   $scope.deleteFriend = function(id) {
     friendsFactory.deleteFriend(id);
     $location.url('/friends');
   };
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
}]); 