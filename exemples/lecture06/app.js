(function (){
    'use strict'

    angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope){
        $scope.name = "carlos";
        $scope.totalValue = 0;
        $scope.displayNumeric = function (){
            var totalValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalValue
        }

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue
        }

    })
})()