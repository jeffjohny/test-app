angular.module('myApp').filter('testFilter', function() {
    return function(input) {
        return input;
    };
});