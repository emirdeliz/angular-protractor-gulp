describe('vehicle.new', function() {
    browser.get('http://localhost:8000/#/vehicle/list');

    element(by.css('a[ng-click*="addCar"]')).click();

    it('validate data befor save', function() {
        element(by.css('a[ng-click*="save"]')).getAttribute('disabled').then(function(value) {
            expect(value).toBeTruthy();
        });

        element(by.model('vehicle.plate')).sendKeys('MXT-0000');
        element(by.css('a[ng-click*="save"]')).getAttribute('disabled').then(function(value) {
            expect(value).toBeTruthy();
        });

        element(by.model('vehicle.model')).sendKeys('Gol');
        element(by.model('vehicle.brand')).sendKeys('Volkswagem');
        element(by.model('vehicle.value')).sendKeys('233');
        element(by.css('a[ng-click*="save"]')).getAttribute('disabled').then(function(value) {
            expect(value).toBeFalsy();
        });
    });

    it('save vehicle', function() {
        element(by.css('a[ng-click*="save"]')).click();

        var vehicles = element.all(by.repeater('vehicle in vehicles'));
        expect(vehicles.count()).toEqual(5);
        expect(vehicles.first().$$('td').get(0).evaluate('vehicle.plate')).toEqual('FFF­-5498');
    });
});
