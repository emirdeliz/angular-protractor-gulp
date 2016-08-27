var VehicleFilter = function() {
    return function (arr, query) {
        if(!query)
            return arr;

        var data = [];
        arr.forEach(function(item){
            var foundByBrand = item.brand.toLowerCase().indexOf(query.toLowerCase()) != -1;
            var foundByFuel = item.fuel.toLowerCase().indexOf(query.toLowerCase()) != -1;
            if(foundByBrand || foundByFuel)
                data.push(item);
        });
        return data;
    };
};

VehicleFilter.$inject = [];
