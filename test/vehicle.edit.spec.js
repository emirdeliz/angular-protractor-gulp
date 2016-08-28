describe('vehicle.save', function() {
    console.log('vehicle.save...')
    browser.get('http://localhost:8000/#/vehicle/list');
    browser.wait(function () {
        browser.executeScript(function () {

            console.log('edit window.angular >>>> ' + window.angular)
            console.log('edit window.location.href >>>> ' + window.location.href)

            return {
                url: window.location.href,
                haveAngular: window.angular
            };
        }).then(function (obj) {
            loaded = (obj.url == expectedUrl && obj.haveAngular);
        });

        return loaded;
    }, 100);

    element(by.css('a[ng-click*="addCar"]')).click();
    element(by.model('vehicle.plate')).sendKeys('HHH-0000');
    element(by.model('vehicle.model')).sendKeys('Uno');
    element(by.model('vehicle.brand')).sendKeys('Fiat');

    it('validate data befor save', function() {
        element(by.css('a[ng-click*="save"]')).getAttribute('disabled').then(function(value) {
            expect(value).toBeTruthy();
        });

        element(by.model('vehicle.value')).sendKeys('233');
        element(by.css('a[ng-click*="save"]')).getAttribute('disabled').then(function(value) {
            expect(value).toBeFalsy();
        });
    });

    it('save vehicle', function() {
        element(by.css('a[ng-click*="save"]')).click();
        element.all(by.repeater('index in getNumPages()')).last().click();

        var vehicles = element.all(by.repeater('vehicle in vehicles'));
        expect(vehicles.count()).toEqual(4);
        expect(vehicles.last().$$('td').get(0).evaluate('vehicle.plate')).toEqual('HHH-0000');
    });
});
