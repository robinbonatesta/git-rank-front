angular.module('app').controller("groupController", function($scope){
var vm = this;
vm.title ="Groups";

vm.group = {
	name:'hacksu',
};

vm.members = [{
	name:'Paul',
	score:'544',
},
{
	name:'matt',
	score:'500',
},
];

/*vm.orders = [
{
	id:0,
	title:'Name',
	key:'name',
},
{
	id:1,
	title:'Score',
	key:'score',
},
];
*/


vm.new = {};
vm.addMember = function(){
	vm.main.member.push(vm.new);
	vm.new = {};
};

console.log('name:', vm.group)

});
