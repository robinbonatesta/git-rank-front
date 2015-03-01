(function() {
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'controllers/profile.ctrl.js',
                templateUrl:'app/views/login.html'
            }) 
            .when('/login', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html',
            })
            .when('/login/:userId', {
                controller: 'profileController',
                templateUrl: 'app/views/userProfile.html'
            })
            .when('/login/:userId/groups', {
                controller: 'groupController',
                templateUrl: 'app/views/groupProfile.html'
            })
            .when('/login/:userId/groupList',{
                controller: 'grouplistController',
                templateUrl: 'app/views/groupList.html'
            })
            //.otherwise( { redirectTo: '/user' } );
    });
    
}());