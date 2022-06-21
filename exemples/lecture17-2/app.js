(function () {
    'use strict'

    let shoppingList1 = [
        "Milk", "Coffe", "Bread"
    ];

    let shoppingList2 = [
        {
            name: "Milk",
            quantity: 2
        },
        {
            name: "Coffe",
            quantity: "10"
        },
        {
            name: "Bread",
            quantity: 5
        }
    ];

    angular.module('AppModule', [])
    .controller('AppController', AppController)

    AppController.$inject = ['$scope']
    function AppController ($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
        $scope.newItemName;
        $scope.newItemQuantity;

        $scope.addToList = function () {
            let newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            }
            
            $scope.shoppingList2.push(newItem)
        }
    }
})()