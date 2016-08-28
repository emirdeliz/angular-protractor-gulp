exports.config = {
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.new.spec.js', 'test/vehicle.edit.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1
    },
    allScriptsTimeout: 5000,
    getPageTimeout: 5000
}
