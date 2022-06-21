(function () {
    'use strict'

    let shoppingList = ["Coffe", "Sugar", "Milk", "Bread"];

    angular.module("AppModule", [])
    .controller("AppController", AppController)

    AppController.$inject = ['$scope']
    function AppController ($scope) {
        $scope.shoppingList = shoppingList;
        $scope.search;
    }
})()