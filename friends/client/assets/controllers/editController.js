"use strict";

app.controller('editController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
   friendsFactory.getFriend(function(returnedData){
     $scope.friend = returnedData;
     console.log($scope.friend);
   });

   friendsFactory.show($routeParams.id, function(returned_data) {
     $scope.friendOne = returned_data.data;
     $scope.friendOne.birthday = new Date($scope.friendOne.birthday);
     console.log($scope.friendOne);
   });

     $scope.deleteFriend = function(id) {
       friendsFactory.deleteFriend(id);
       $location.url('/friends');
     };

    $scope.update = function(){
      friendsFactory.update($scope.friendOne, $routeParams.id);
      $location.url('/friends');
    };

  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);