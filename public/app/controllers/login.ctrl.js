angular.module('login').controller("loginController",function(){
var vm = this;
vm.title = "Login";


var username = $location.path('/username').search({key: username});

//Storing the local Data.
localStorage.setItem('username', username);
//Retrieve Local Data.
document.getElementById("result").innerHTML = localStorage.getItem('username');

/* User name */
//vm.username = $location.path('/username').search({key: username});


});	