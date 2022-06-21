(function () {
    'use strict'

    angular.module('ShoppingListApp', [])
    .controller('ShoppingToBuyController', ShoppingToBuyController)
    .controller('ShoppingAlredyBoughtController', ShoppingAlredyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ShoppingToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingToBuyController (ShoppingListCheckOffService) {
        let vm = this;
       
        vm.service = ShoppingListCheckOffService;

        vm.toBuyList = vm.service.getToBuyList();

        vm.boughtItem = function (itemIndex) {
            vm.service.boughtItem(itemIndex)
        }
    }

    ShoppingAlredyBoughtController.$inject = ['ShoppingListCheckOffService']
    function ShoppingAlredyBoughtController (ShoppingListCheckOffService) {
        let vm = this;

        vm.service = ShoppingListCheckOffService;

        vm.alredyBoughtList = vm.service.getAlredyBoughtList();
        
    }

    function ShoppingListCheckOffService(){
        let vm = this;

        let toBuyList = [
            {
                name: "Cookies",
                quantity: "10"
            },
            {
                name: "Candy",
                quantity: "20"
            },
            {
                name: "Bread",
                quantity: "15"
            },
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Water",
                quantity: "10"
            }
        ]
       
        let AlredyBoughtList = []

        vm.getToBuyList = function () {
            return toBuyList;
        }

        vm.getAlredyBoughtList = function () {
            return AlredyBoughtList;
        }

        vm.boughtItem = function (itemIndex) {
            console.log("bought")
            AlredyBoughtList.push(toBuyList[itemIndex])
            toBuyList.splice(itemIndex, 1)
           
        }

    }
    
})()