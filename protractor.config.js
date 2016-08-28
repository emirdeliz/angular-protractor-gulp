exports.config = {
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.new.spec.js', 'test/vehicle.edit.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1
    },
    allScriptsTimeout: 15000,
    getPageTimeout: 15000
}
