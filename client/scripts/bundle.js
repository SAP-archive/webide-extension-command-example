var path = require('path');
var pkgPath = path.resolve(__dirname, '../package.json');

require('@sap-webide/webide-client-tools').bundling.bundleFeature(pkgPath).catch(function (e) {
    console.log(e);
    process.exit(1);
});