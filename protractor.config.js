exports.config = {
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.save.spec.js'],
    capabilities: {
        browserName: 'chrome',
    	shardTestFiles: true,
        maxInstances: 2
    }
}
