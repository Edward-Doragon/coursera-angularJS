(function () {
    angular.module('LunchCheck', [])
    .controller('lunchCheckController', lunchCheckController);

    lunchCheckController.$inject = ['$scope'];
    
    function lunchCheckController ($scope){
        $scope.lunchItens;
        $scope.message;
        $scope.checkLunch = function () {
            lunchItens = this.numberOfItens($scope.lunchItens);

            if(lunchItens.length <= 3 && lunchItens.length > 0){
                $scope.message = "Enjoy!";
            }
            if(lunchItens.length > 3){
                $scope.message = "Too much!";
            }
            if(lunchItens == 0){
                $scope.message = "Please enter data first";
            }
        };
        
        $scope.numberOfItens = function (lunchItens) {
            return lunchItens.split(',');
        }
    }
})()