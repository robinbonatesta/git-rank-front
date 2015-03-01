 angular.module('app').controller("profileController", function($scope, $location){
    var vm = this;
    vm.title = 'Profile';
    
    var seg = $location.path().split('/');
    var username = seg[2];
    console.log(username);

    //Storing the local Data.
    localStorage.setItem('username', username);
    
    //get username
    vm.name = localStorage.getItem('username');
    console.log('name: ', vm.name);
  
    vm.score = 102010101010;
  //Group Params need a value from api to use in Profile/Groups Ctrl.
    vm.groups = [
    {
      name: 'Hacksu', 
    },


];

        
});


