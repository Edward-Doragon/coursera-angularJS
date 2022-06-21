let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array", numberArray)

let filteredNumberArray = numberArray.filter(function (value){
    return value > 5;
})
console.log("Filter number Array", filteredNumberArray)


///////////////////////////////////////
function belowFive (value) {return value < 5};
filteredNumberArray = numberArray.filter(belowFive);
console.log("Filter number Array", filteredNumberArray);

//////////////////////////////////////
let shoppingList = ["Coffe", "Sugar", "Milk", "Bread"];
console.log(shoppingList);

//////////////////////////////////////
var searchValue = "Coffe";
function containsFilter(value){
    return value.indexOf(searchValue) !== -1
}

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log(searchedShoppingList);