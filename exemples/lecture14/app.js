(function () {
    'use strict'

    angular.module('AppModule', [])
    .controller('appController', appController)

    appController.$inject = ['$scope'];
    function appController ($scope){

        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.upCounter = function () {
            $scope.counter++;
        }

        $scope.showNumberOfWatchers = function () {
            console.log("Number of watchers: ", $scope.$$watchersCount);
        };

        $scope.counterOnce = function () {
            $scope.onceCounter = 1;
        }

        $scope.$watch( function() {
            console.log("Digest loop fired")
        })

        /*
        $scope.$watch('onceCounter', function(newValue, oldValue){
            console.log("old value ", oldValue);
            console.log("new value ", newValue);
        })

        $scope.$watch('counter', function(newValue, oldValue){
            console.log("counter old value ", oldValue);
            console.log("counter new value ", newValue);
        })
        */
        
    }

})()