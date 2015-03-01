angular.module('app').controller("groupController", function($scope, $http, $routeParams){
var vm = this;
vm.title ="Groups";

vm.group;

vm.members = [];

function get() {
	$http
		.get('http://104.236.194.95/groups/'+$routeParams.name)
		.success(function (data) {
			vm.members = data.users;
			vm.group = data.name;
		})
		.error(function (data) {
			console.log(data);
		});
}
get();

vm.new = {};
vm.addMember = function(){
	$http
		.put('http://104.236.194.95/groups/'+$routeParams.name+'/join/'+vm.new.name)
		.success(function (data) {
			get();
			vm.new = {};
		})
		.error(function (data) {
			console.log(data);
		});
};

});
