sap.ui.jsview("sap.webide.example.ui5.plugin.ui5.view.HelloWorldView", {

    // _oContext : undefined,

    getControllerName : function() {
        return "sap.webide.example.ui5.plugin.ui5.view.HelloWorldView";
    },

    createContent: function(oController) {

        var layout = new sap.ui.layout.VerticalLayout({});

        var viewDescription = new sap.m.Text({
            text: "This dialog show cases a ui5 js view, with custom control, coming from from a UI5 minified preload"
        });
        layout.addContent(viewDescription);

        sap.ui.require(["sap/webide/example/ui5/plugin/ui5/controls/TextWithBold"], function() {
            var textWithBold = new sap.webide.example.ui5.plugin.ui5.controls.TextWithBold({
                text: "Hello World",
                useBoldForText : true
            });
            layout.addContent(textWithBold);
        });

        return layout;
    }
});