(function() {
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'login.ctrl.js',
                templateUrl: 'app/views/login.html'
            })
            .when('/users/:userID', {
                controller: 'profile.ctrl.js',
                templateUrl: 'app/views/userProfile.html'
            })
            .when('/groups', {
                controller: 'group.ctrl.js',
                templateUrl: 'app/views/groupProfile.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());