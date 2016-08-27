var VehicleEditController = function($scope, $state, $stateParams, Vehicle) {
    $scope.init = function() {
        $scope.vehicle = Vehicle.get({id: $stateParams.id});
    };

    $scope.save = function(vehicle) {
        Vehicle.update({id: vehicle.id}, vehicle).$promise.then(
            function(response) {
                $state.go('vehicle.list');
            },
            function(error) {
                console.log(error);
            }
        );
    };

    $scope.cancel = function() {
        $state.go('vehicle.list', {page: 0, query: ''});
    };
};

VehicleEditController.$inject = ['$scope', '$state', '$stateParams', 'Vehicle'];
