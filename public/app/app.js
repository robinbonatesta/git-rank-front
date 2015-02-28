(function() {
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'controllers/profile.ctrl.js',
                templateURL:'app/views/login.html'
            }) 
            .when('/login', {
                controller: 'controllers/login.ctrl.js',
                templateUrl: 'app/views/login.html',
            })
            .when('/user', {
                controller: 'controllers/profile.ctrl.js',
                templateUrl: 'app/views/userProfile.html'
            })
            .when('/groups', {
                controller: 'controllers/group.ctrl.js',
                templateUrl: 'app/views/groupProfile.html'
            })
            //.otherwise( { redirectTo: '/user' } );
    });
    
}());