/**
 * A service implementation sample for displaying a greeting notification using a UI5 view.
 */
define({

    /**
     * Displays greeting notification using a ui5 view
     * @public
     * @memberOf ui5sample
     * @param {string} sName - An appendix to the name that appears in the greeting
     */
    sayHelloInView: function() {
        // Create a view
        var helloWorldView = sap.ui.view({
            type:sap.ui.core.mvc.ViewType.JS,
            viewName:"sap.webide.helloworld_ui5.plugin.view.HelloWorldView"
        });

        // Create cancel button
        var oBtnCancel = new sap.m.Button({
            text : "Cancel",
            press : function() {
                oDialog.close();
            }
        });

        // Create a dialog, with the button and view from above
        var oDialog = new sap.m.Dialog({
            buttons : [ oBtnCancel ],
            content : [ helloWorldView ]
        });

        oDialog.open();
    }
});