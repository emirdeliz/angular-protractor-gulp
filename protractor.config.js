exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/vehicle.navigation.spec.js', 'test/vehicle.save.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        print: function() {},
        // If set, only execute specs whose names match the pattern, which is
        // internally compiled to a RegExp.
        grep: 'pattern',
        // Inverts 'grep' matches
        invertGrep: false
    }
}
