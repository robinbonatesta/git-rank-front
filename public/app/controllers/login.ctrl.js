angular.module('app').controller("loginController",function($scope, $location){
  var vm = this;
  vm.title = "Login";


  var seg = $location.path().split('/');
  var username = seg[2];
  console.log(username);

  //Storing the local Data.
  localStorage.setItem('username', username);

  /* User name */
  //vm.username = $location.path('/username').search({key: username});


});	