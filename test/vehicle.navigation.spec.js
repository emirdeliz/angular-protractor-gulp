describe('navigation', function() {
    browser.get('http://127.0.0.1:8000/#/vehicle/list');
    browser.wait(function() {
        browser.ignoreSynchronization = true;
        var ret = by.css('a[ng-click*="addCar"]');
        browser.ignoreSynchronization = false;
        return ret;
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
