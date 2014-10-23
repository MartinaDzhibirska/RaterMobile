var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
        when('/', {
            templateUrl: 'src/views/home.html',
            controller: 'mainController'
        }).
        when('/coffee', {
            templateUrl: 'src/views/coffee.html',
            controller: 'mainController'
        }).
        when('/food', {
            templateUrl: 'src/views/food.html',
            controller: 'mainController'
        }).
        when('/culture', {
            templateUrl: 'src/views/culture.html',
            controller: 'mainController'
        }).
        when('/nightlife', {
            templateUrl: 'src/views/nightlife.html',
            controller: 'mainController'
        }).
        when('/shopping', {
            templateUrl: 'src/views/shopping.html',
            controller: 'mainController'
        }).
        when('/outdoors', {
            templateUrl: 'src/views/outdoors.html',
            controller: 'mainController'
        }).
        otherwise({
            redirectTo: '/'
        });
        app.controller('mainController', function($scope) {
            $scope.test = 'angular works!';
        });

}]);