( function(){
    'use strict'

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController )
    .provider('ShoppingListService', ShoppingListServiceProvider)
    .config(Config)

    Config.$inject = ['ShoppingListServiceProvider'];
    function Config (ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 2;
    }

    ShoppingListController.$inject = ['ShoppingListService']
    function ShoppingListController (ShoppingListService) {
        let vm = this;

        vm.items = ShoppingListService.getItems();

        vm.itemName = "";
        vm.itemQuantity = "";
        
        vm.addItem = function () {
            try {
                ShoppingListService.addItem(vm.itemName, vm.itemQuantity);
            } catch (error){
                vm.errorMessage = error.message;
            }
        }
        
    }

    function ShoppingListService (maxItems){
        let service = this;

        let items = [];

        service.addItem = function (itemName, itemQuantity) {
            if ((maxItems === undefined) ||
                (maxItems !== undefined) &&
                (items.length < maxItems)) {
                    
                let item = {
                    name: itemName,
                    quantity: itemQuantity
                }

                items.push(item)
            }else {
                throw new Error("Max items ("+ maxItems +") reached");
            }
        }

        service.getItems = function () {
            return items;
        }
    }

    function ShoppingListServiceProvider (){
        var provider = this;

        provider.defaults = {
            maxItems: 10
        }

        provider.$get = function () {
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);

            return shoppingList;
        };
    }

})()