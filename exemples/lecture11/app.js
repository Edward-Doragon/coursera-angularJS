(function () {
    angular.module('AppModule', [])
    .controller('appModuleController', appModuleController);

    appModuleController.$inject = ['$scope'];

    function appModuleController($scope){
        $scope.name = "Snorlax"
        $scope.stateOfBeing = "hungry";

        $scope.feed = function () {
           $scope.stateOfBeing = "feed";
        };
    }
})()