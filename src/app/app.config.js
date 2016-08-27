var AppConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('vehicle', {
        abstract:true,
        url: '/vehicle',
        templateUrl: 'components/vehicle/views/vehicle.home.html'
    }).state('vehicle.list', {
        url: '/list',
        templateUrl: 'components/vehicle/views/vehicle.list.html',
        controller: 'VehicleListController'
    }).state('vehicle.new', {
        url: '/new',
        templateUrl: 'components/vehicle/views/vehicle.new.html',
        controller: 'VehicleNewController'
    }).state('vehicle.edit', {
        url: '/:id/edit',
        templateUrl: 'components/vehicle/views/vehicle.edit.html',
        controller: 'VehicleEditController'
    });

    //$urlRouterProvider.otherwise('/vehicle/list');
};

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
