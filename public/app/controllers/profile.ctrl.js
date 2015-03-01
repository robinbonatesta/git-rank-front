
angular.module('app').controller("profileController", function($scope, $location, $http  ){
  var vm = this;
  vm.title = 'Profile';

  //Get username from path
  var seg = $location.path().split('/');
  var username = seg[2];
  console.log(username);

  //Storing the local Data.
  localStorage.setItem('username', username);

  //get username
  vm.name = localStorage.getItem('username');

  vm.score;

  vm.groups=[];

  $http
    .get('http://104.236.194.95/users/'+vm.name)
    .success(function (data) {
      vm.score = data.score;
      vm.groups = data.groups;
    })
    .error(function (data) {
      console.log(data);
    });

});


