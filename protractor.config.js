exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.save.spec.js'],
    capabilities: {
        browserName: 'chrome',
    	shardTestFiles: true,
        maxInstances: 2
    },
    framework: 'jasmine2'
}
