var AppRun = function($state, $httpBackend) {

    $httpBackend.whenGET(/views\/.*/).passThrough();

    $httpBackend.whenGET(/api\/vehicle\?page=(\d+)/).respond(function(method, url, data, headers, params) {
        var page = VehicleMockUtils.matchParams(url.split('?')[1]).page;
        var query = VehicleMockUtils.matchParams(url.split('?')[1]).query;
        var vehicles = VehicleMockUtils.getAll(page, query);
        var status  = 200;
        return [status, vehicles];
    });

    $httpBackend.whenGET(/\/api\/vehicle\?id=(\d+)/).respond(function(method, url, data, headers, params) {
        var id = VehicleMockUtils.matchParams(url.split('?')[1]).id;
        var vehicles = VehicleMockUtils.get(id);
        var status  = 200;
        return [status, vehicles];
    });

    $httpBackend.whenPOST(/\/api\/vehicle/).respond(function(method, url, data, headers, params) {
        var vehicle = VehicleMockUtils.save(angular.fromJson(data));
        var status  = 200;
        return [status, vehicle];
    });

    $httpBackend.whenPUT(/\/api\/vehicle\?id=(\d+)/).respond(function(method, url, data, headers, params) {
        var vehicle = VehicleMockUtils.save(angular.fromJson(data));
        var status  = 200;
        return [status, vehicle];
    });

    $httpBackend.whenDELETE(/\/api\/vehicle\?id=(\d+)/).respond(function(method, url, data, headers, params) {
        var vehicles = VehicleMockUtils.remove();
        var status  = 200;
        return [status, vehicles];
    });

    $state.go('vehicle.list', {page: 0, query: ''});
};

AppRun.$inject = ['$state', '$httpBackend'];
