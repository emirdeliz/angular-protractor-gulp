describe('vehicle.edit', function() {
    browser.get('http://localhost:8000/#/vehicle/list');
    browser.wait(function () {
        browser.executeScript(function () {

            console.log('new window.angular >>>> ' + window.angular)
            console.log('new window.location.href >>>> ' + window.location.href)

            return {
                url: window.location.href,
                haveAngular: window.angular
            };
        }).then(function (obj) {
            loaded = (obj.url == expectedUrl && obj.haveAngular);
        });

        return loaded;
    }, 100);

    expect(vehicles.first().$$('td').get(0).click();

    element(by.model('vehicle.plate')).sendKeys('AAA-9999');
    element(by.model('vehicle.value')).sendKeys('');

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

        var vehicles = element.all(by.repeater('vehicle in vehicles'));
        expect(vehicles.count()).toEqual(5);
        expect(vehicles.first().$$('td').get(0).evaluate('vehicle.plate')).toEqual('AAA-9999');
    });
});
