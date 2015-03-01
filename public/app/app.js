(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'app/views/login.html'
            })
            .when('/login', {
                templateUrl: 'app/views/login.html',
            })
            .when('/login/:username', {
                templateUrl: 'app/views/userProfile.html'
            })
            .when('/groups/:name', {
                templateUrl: 'app/views/groupProfile.html'
            })
            .when('/groups',{
                templateUrl: 'app/views/groupList.html'
            });
    });

}());