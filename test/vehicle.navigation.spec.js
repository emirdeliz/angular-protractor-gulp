describe('navigation', function() {
    browser.get('http://localhost:8000/#/vehicle/list');

    it('go to save page', function() {
        element(by.css('a[ng-click*="addCar"]')).click();
        expect(element(by.css('a[ng-click*="cancel"]')).isPresent()).toBe(true);
    });

    it('cancel action save', function() {
        element(by.css('a[ng-click*="cancel"]')).click();
        expect(element(by.css('a[ng-click*="addCar"]')).isPresent()).toBe(true);
    });
});
