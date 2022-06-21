(function () {
    angular.module("AppModule", [])
    .controller('appModuleController', appModuleController)
    .filter('jobs', JobsFilter)
    .filter('truth', TruthFilter)

    appModuleController = ['$scope', '$filter', 'jobsFilter'];
    function appModuleController($scope, $filter, jobsFilter){
        $scope.name = "carlos"
        $scope.payment = .50;
        $scope.sayHello = function () {
            msg = "Hello World!"
            var output = $filter('uppercase')(msg);
            return output;
        }
        $scope.sayJob = function () {
            var msg = "do many jobs";
            msg = jobsFilter(msg);
            return msg;
        }
    }

    function JobsFilter(){
        return function (input) {
            input = input || "";
            input = input.replace("jobs", "program");
            return input;
        }
    }

    function TruthFilter(){
        return function (input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})()