describe('navigation', function() {
    console.log('navigation...')
    browser.get('http://localhost:8000/#/vehicle/list');
    browser.wait(function () {
        browser.executeScript(function () {

            console.log('navigation window.angular >>>> ' + window.angular)
            console.log('navigation window.location.href >>>> ' + window.location.href)

            return {
                url: window.location.href,
                haveAngular: window.angular
            };
        }).then(function (obj) {
            loaded = (obj.url == expectedUrl && obj.haveAngular);
        });

        return loaded;
    }, 100);

    it('go to save page', function() {
        element(by.css('a[ng-click*="addCar"]')).click();
        expect(element(by.css('a[ng-click*="cancel"]')).isPresent()).toBe(true);
    });

    it('cancel action save', function() {
        element(by.css('a[ng-click*="cancel"]')).click();
        expect(element(by.css('a[ng-click*="addCar"]')).isPresent()).toBe(true);
    });
});
