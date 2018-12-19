sap.ui.define([], function () {

    sap.m.Text.extend("sap.webide.example.ui5.plugin.ui5.controls.TextWithBold", {
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