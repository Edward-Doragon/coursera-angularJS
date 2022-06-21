(function (){
    'use strict'

    angular.module("ControllerAsApp", [])
    .controller("ShoppingListController1", ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory)

    //LIST 1 CONTROLLER
    ShoppingListController1.$inject = ['ShoppingListFactory']
    function ShoppingListController1 (ShoppingListFactory) {
        let list1 = this;

        //Use factory to create a new Shopping List Service
        let shoppingList = ShoppingListFactory();

        list1.items = shoppingList.getItems();

        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function () {
            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        }

        list1.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex)
        }

    }

    //LIST 2 CONTROLLER
    ShoppingListController2.$inject = ['ShoppingListFactory']
    function ShoppingListController2 (ShoppingListFactory) {
        let list2 = this;

        //Use factory to create a new Shopping List Service
        let shoppingList = ShoppingListFactory(3)

        list2.items = shoppingList.getItems();

        list2.itemName = "";
        list2.itemQuantity = "";

        list2.addItem = function () {
            try{
                shoppingList.addItem(list2.itemName, list2.itemQuantity)
            }catch (error){
                list2.errorMessage = error.message;
            }
        }

        list2.removeItem = function (){
            shoppingList.removeItem(itemIndex);
        };
    }

    //SHOPPING LIST SERVICE
    function ShoppingListService(maxItems){
        let service = this;

        let items = []

        service.addItem = function (itemName, itemQuantity) {
            if( (maxItems === undefined) ||
                (maxItems !== undefined) &&
                (items.length < maxItems)) {
                let item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            }else {
                throw new Error ("Max items (" + maxItems + ") reached.");
            }  
        };

        service.removeItem = function (itemIndex){
            items.splice(itemIndex, 1);
        }

        service.getItems = function (){
            return items;
        }

    }

    //SHOPPING LIST FACTORY
    function ShoppingListFactory () {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems)
        }

        return factory;
    }
})()