angular.module('app').controller("grouplistController",function($scope, $http){
  var vm = this;
  vm.title = 'GroupList';

  vm.grouplist = [];

  $http
    .get('http://104.236.194.95/groups')
    .success(function (data) {
      vm.grouplist = data.groups;
    })
    .error(function (data) {
      console.log(data);
    });

});
