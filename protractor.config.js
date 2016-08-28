exports.config = {
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.new.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    allScriptsTimeout: 55000,
    getPageTimeout: 55000
}
