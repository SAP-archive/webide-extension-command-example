function bundle(baseDir) {
    const FileSystemAdapter = require("@ui5/fs/lib/adapters/FileSystem");
    const preloadBundler = require("@ui5/builder/lib/processors/bundlers/moduleBundler");

    const source = new FileSystemAdapter({
        fsBasePath: "./helloworld_ui5",
        virBasePath: "/resources/sap/webide/helloworld_ui5/plugin/"
    });
    const target = new FileSystemAdapter({
        fsBasePath: baseDir,
        virBasePath: "/"
    });

    source.byGlob("/**/*.{js,json,xml,html,properties}").then(function (allResources) {
        return preloadBundler({
            options: {
                bundleDefinition: {
                    name: "bundleUI5Resources.js",
                    sections: [
                        {
                            mode: "preload",
                            filters: [
                                // Includes / excludes need to be defined properly in here
                                // to only include UI5 modules, not pure AMD modules
                                "sap/webide/helloworld_ui5/plugin/control/",
                                "sap/webide/helloworld_ui5/plugin/view/"
                            ],
                            resolve: false
                        }
                    ]
                }
            },
            resources: allResources
        }).then(function (bundle) {
            return target.write(bundle[0]);
        });
    });
}

module.exports = {bundle: bundle};