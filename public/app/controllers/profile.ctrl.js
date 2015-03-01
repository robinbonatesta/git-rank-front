angular.module('app').controller("profileController", function($scope){
    var vm = this;
    vm.title = 'Profile';
    
    //get username
    vm.name = localStorage.getItem('username');
    console.log('name: ', vm.name);
  
    vm.score = 102010101010;
  
    vm.groups=[
      {
        name:'hacksu',
      },
      {
        name:'poopers',
      },
    ];
        
});


