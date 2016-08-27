var VehicleMockUtils = function() {}
VehicleMockUtils.get = function(id) {
    var vehicle;
    VehicleMockUtils.mock.forEach(function(item, index) {
        if(item.id == id) {
            vehicle = item;
            return;
        }
    });
    return vehicle;
};

VehicleMockUtils.getIndex = function(id) {
    var indexItem;
    VehicleMockUtils.mock.forEach(function(item, index) {
        if(item.id == id) {
            indexItem = index;
            return;
        }
    });
    return indexItem;
};

VehicleMockUtils.getAll = function(currentPage, query) {
    var startFrom = currentPage * 5;
    var endOn = startFrom + 5;

    if(!query)
        return {data: VehicleMockUtils.mock.slice(startFrom, endOn), numRegister: VehicleMockUtils.mock.length};

    var data = [];
    VehicleMockUtils.mock.forEach(function(item){
        var foundByBrand = item.brand.toLowerCase().indexOf(query.toLowerCase()) != -1;
        var foundByFuel = item.fuel.toLowerCase().indexOf(query.toLowerCase()) != -1;
        if(foundByBrand || foundByFuel)
            data.push(item);
    });

    return {data: data.slice(startFrom, endOn), numRegister: data.length};
}

VehicleMockUtils.save = function(data) {
    if(!data.id){
        data.id = Math.random().toString(15).substr(2, 5);
        VehicleMockUtils.mock.push(data)
    } else {
        var indexItem = VehicleMockUtils.getIndex(data.id);
        VehicleMockUtils.mock[indexItem] = data;
    }
    return data;
}

VehicleMockUtils.remove = function(id) {
    var indexItem = VehicleMockUtils.getIndex(id);
    delete VehicleMockUtils.mock[indexItem];
    return VehicleMockUtils.mock;
}

VehicleMockUtils.matchParams = function(query) {
    var match;
    var params = {};

    var pl = /\+/g;
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };

    while (match = search.exec(query))
        params[decode(match[1])] = decode(match[2]);

    return params;
}


VehicleMockUtils.mock = [
    {
        id: Math.random().toString(14).substr(2, 5),
        plate: 'FFF­-5498',
        brand: 'Volkswagem',
        model: 'Gol',
        fuel: 'flex',
        value: '20000',
        image: null
    }, {
        id: Math.random().toString(2).substr(2, 5),
        plate: 'FOX-­4125',
        brand: 'Volkswagem',
        model: 'Fox',
        fuel: 'gasolina',
        value: '20000',
        image: null
    }, {
        id: Math.random().toString(3).substr(2, 5),
        plate: 'FFF­-5498',
        brand: 'Volkswagem',
        model: 'Gol',
        fuel: 'flex',
        value: '20000',
        image: null
    }, {
        id: Math.random().toString(4).substr(2, 5),
        plate: 'FOX-­4125',
        brand: 'Volkswagem',
        model: 'Fox',
        fuel: 'gasolina',
        value: '20000',
        image: null
    }, {
        id: Math.random().toString(5).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(6).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(7).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(8).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(9).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(10).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(11).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    },{
        id: Math.random().toString(12).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    }, {
        id: Math.random().toString(13).substr(2, 5),
        plate: 'PAI­-4121',
        brand: 'Volkswagen',
        model: 'Fusca',
        fuel: 'alcool',
        value: '20000',
        image: 'https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4N YaE/s48­c­k­no/photo.jpg'
    }
];
