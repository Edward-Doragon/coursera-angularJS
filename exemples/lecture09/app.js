(function (){
    'use strict'

    angular.module('AppModule', [])
    .controller('appModuleController', appModuleController);

    appModuleController.$inject = [
        '$scope',
        '$filter'
    ];

    function appModuleController ($scope, $filter){
        $scope.name = "carlos"

        $scope.upper = function () {
            var upCase = $filter('uppercase')
            $scope.name = upCase($scope.name)
        }
    }
    
})()