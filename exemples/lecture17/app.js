(function () {
    angular.module('AppModule', [])
    .controller("AppController", AppController)

    AppController.$inject = ['$scope']

    function AppController ($scope) {
        $scope.firstName = "Carlos";

        $scope.showNumberOfWatchers = function () {
            console.log('Number of watchers: ', $scope.$$watchersCount);
        };

        $scope.setFullName = function () {
            $scope.fullName = $scope.firstName + " " + "Souza"
        };

        $scope.logFirstName = function () {
            console.log("First name is: ", $scope.firstName);
        }

        $scope.logFullName = function () {
            console.log("Full name is: ", $scope.fullName)
        }
    }
})()