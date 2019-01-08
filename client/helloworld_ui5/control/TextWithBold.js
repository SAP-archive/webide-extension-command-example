sap.ui.define([], function () {

    sap.m.Text.extend("sap.webide.helloworld_ui5.plugin.control.TextWithBold", {
        metadata: {
            properties: {
                "useBoldForText": {
                    type: "boolean",
                    multiple: false
                }
            }
        },

        init: function () {
            this.useBoldForText = false;
        },

        setUseBoldForText: function (bUseBoldForText) {
            this.useBoldForText = bUseBoldForText;
        },

        getUseBoldForText: function () {
            return this.useBoldForText;
        },

        renderer: function (rm, ctrl) {
            /* eslint-disable xss/no-mixed-html */
            rm.write("<div>");
            /* istanbul ignore else */
            if (ctrl.getUseBoldForText()) {
                rm.write("<b>");
            }
            rm.write(ctrl.getText());
            /* istanbul ignore else */
            if (ctrl.getUseBoldForText()) {
                rm.write("</b>");
            }
            rm.write("</div>");
            /* eslint-enable xss/no-mixed-html */
        }
    });
});