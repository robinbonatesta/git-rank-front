angular.module('app').controller("groupController", function(){
  var vm = this;
  vm.title ="Groups";

  vm.groups = [
    {
      name: 'hacksu',
    }
  
  ];


  /* New blank group + function to add new group */  
  vm.new = {};
  vm.addGroup = function() {
      vm.groups.push(vm.new);
      vm.new = {};
  };
  
  vm.hideForm = true;
  vm.showForm = function(){
  
    vm.hideForm = false;
  
  };

});
