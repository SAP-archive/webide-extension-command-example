var path = require('path');
var pkgPath = path.resolve(__dirname, '../package.json');

require('@sap-webide/webide-client-tools').bundling.bundleFeature(pkgPath, {
    javaScriptOpts: {
        ignore: ["**/helloworld_ui5/control/**",
            "**/helloworld_ui5/view/**"
        ]
    }
}).then(function (bundleObj){
    // Bundle the UI5 resources (views/controllers/controls)
    var sapui5Bundling = require('./sapui5Bundling');
    sapui5Bundling.bundle(bundleObj.outDir);
}).catch(function (e) {
    console.log(e);
    process.exit(1);
});