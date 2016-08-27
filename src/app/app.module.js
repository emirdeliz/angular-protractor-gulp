angular.element(document).ready(function() {
    var app = angular.module('FleetApp', ['ui.router', 'ngResource', 'ui.utils.masks', 'ngMockE2E']);
    app.service('Vehicle', Vehicle);
    app.controller('VehicleListController', VehicleListController);
    app.controller('VehicleEditController', VehicleEditController);
    app.controller('VehicleNewController', VehicleNewController);
    app.filter('vehicleFilter', VehicleFilter);
    app.directive('fileUploadDirective', FileUploadDirective);
    app.value('GlobalParam', GlobalParam);
    app.config(AppConfig);
    app.run(AppRun);

    angular.bootstrap(document, ['FleetApp']);
});
