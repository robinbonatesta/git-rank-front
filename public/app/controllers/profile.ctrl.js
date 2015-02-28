angular.module('app').controller("profileController", function(){
    var vm = this;
    vm.title = 'Profile';
    
    /* Here's an array of members. */
    vm.members = [
        {
            username: 'Robin',
            score: '544.5',
        },
        {
            username: 'Paul',
            score: '545',
        },
        {
            username: 'Henry',
            score: '500',
        },
        {
            username: 'Brad',
            score: '500',
        },
    ];
    
    /* We'll use this later to reorganize our data to order it
      either by name or by color. */
    vm.orders = [
        {
            id: 0,
            title: 'Name',
            key: 'name',
        },
        {
            id: 1,
            title: 'Score',
            key: 'score',
        }
    ];
    
    /* This is how the page will now what order-by value it will be set to. We're
      going to have it automatically defined to order by name, which you can see has
      an ID of 0. */
    vm.order = vm.orders[0];    
});


