var VehicleNewController = function($scope, $state, Vehicle) {
    $scope.init = function() {
        $scope.vehicle = new Vehicle();
    };

    $scope.save = function() {
        $scope.vehicle.$save().then(
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

VehicleNewController.$inject = ['$scope', '$state', 'Vehicle'];
