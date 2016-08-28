exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.save.spec.js'],
    baseUrl: 'http://localhost:8080',
    rootElement: 'html',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    maxSessions: 1,
    allScriptsTimeout: 40000,
    getPageTimeout: 40000,
    rootElement: 'html'
}
