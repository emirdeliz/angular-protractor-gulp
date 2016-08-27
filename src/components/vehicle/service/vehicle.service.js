var Vehicle = function($resource) {
    return $resource('/api/vehicle', {page: '@_page', query: '@_query', id: '@_id'}, {
        query: {
            isArray: false
        },
        update: {
            method: 'PUT'
        }
    });
};

Vehicle.$inject = ['$resource'];
