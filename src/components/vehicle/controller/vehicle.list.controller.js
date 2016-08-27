var VehicleListController = function($scope, $state, $filter, $stateParams, $q, $timeout, Vehicle, GlobalParam) {
    $scope.vehicles = [];

    $scope.init = function() {
        $scope.currentPage = 0;
        $scope.buildPagination();
    };

    $scope.getAll = function() {
        return Vehicle.query({page: $scope.currentPage, query: $scope.query});
    };

    $scope.addCar = function() {
        $state.go('vehicle.new');
    };

    $scope.editCar = function(vehicle) {
        $state.go('vehicle.edit', {id: vehicle.id});
    };

    $scope.selectAllVehicle = function() {
        $scope.selectAll = !$scope.selectAll;
        $scope.vehicles.forEach(function(vehicle) {
            vehicle.selected = $scope.selectAll;
        });
    };

    $scope.prevPage = function() {
        $scope.currentPage--;
        $scope.refreshData();
    };

    $scope.nextPage = function() {
        $scope.currentPage++;
        $scope.refreshData();
    };

    $scope.refreshData = function() {
        var deferred = $q.defer();
        $scope.getAll().$promise.then(
            function(response) {
                $scope.vehicles = response.data;
                $scope.vehicles.forEach(function(vehicle, index){
                    vehicle.selected = $scope.selectAll;
                });
                deferred.resolve(response);
            },
            function(error) {
                console.log(error);
            }
        );
        return deferred.promise;
    };

    $scope.buildPagination = function() {
        $scope.$watch('query', function (newVal, oldVal) {
            $timeout(function() {
                var arrFiltered = $filter('vehicleFilter') ($scope.vehicles, $scope.query);
                var numRegister = arrFiltered.length;

                if(numRegister <= 5){
                    $scope.numPages = 1;
                    $scope.refreshData().then(function(response){
                        $scope.buildNumberPages(response.numRegister);
                    });
                }else
                    $scope.buildNumberPages(numRegister);
            }, GlobalParam.timetOut.keyupFilter);
        });
    };

    $scope.buildNumberPages = function(numRegister) {
        var numPages = numRegister / 5;
        $scope.numPages = Math.floor((numPages % 1 !== 0 ? numPages + 1: numPages));
        return $scope.numPages;
    };

    $scope.showVehicle = function(index) {
        $scope.currentPage = index;
        $scope.refreshData();
    };

    $scope.getNumPages = function() {
        return new Array($scope.numPages);
    };
};

VehicleListController.$inject = ['$scope', '$state', '$filter', '$stateParams', '$q', '$timeout', 'Vehicle', 'GlobalParam'];
