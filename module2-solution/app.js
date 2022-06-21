(funtion () {
    'use strict'

    angular.module('ShoppingListApp', [])
    .controller('ShoppingToBuyController', ShoppingToBuyController)

    function ShoppingToBuyController () {
        vm = this;
    }
})()