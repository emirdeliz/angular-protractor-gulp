exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.save.spec.js', 'test/vehicle.edit.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    framework: 'jasmine'
}
