(function (){
    'use strict'

    angular.module('myFirstApp', [] )
    .controller('myFirstController', function($scope){
        $scope.name = "Carlos"
        $scope.sayHello =  function  () {return "Hello Coursera";};
        $scope.sayGoodBye = sayGoodBye()

        function sayGoodBye () {
            return "Good Bye Little Start";
        }
       
    });
})();