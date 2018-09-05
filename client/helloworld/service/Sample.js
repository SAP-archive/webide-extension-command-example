/**
 * A service implementation sample for displaying a greeting notification and counting the number of alerts displayed.
 * 
 * The service provides a public API which is defined in its interface (in this example, Sample.json file) 
 * and can be used by other plugins.   
 * 
 * Every method call on a service is asynchronous and returns a Q-promise.
 * If not done explicitly by the method, the return value is automatically wrapped with a promise object.
 * 
 * Other services (which are required by this service plugin, as defined in the plugin.json file) can be accessed 
 * using 'this.context.service' property.
 * 
 * A service can fire events that are defined in its interface. These events can be handled by any other service.
 * 
 * A service can also handle events from any other service (including its own).
 * The events subscription along with the handler methods must be defined in the plugin.json file.
 * 
 */
define({

	_iNotificationCount: null,

	init: function() {
		this._iNotificationCount = 0;
	},

	sayHello: function(sName) {
		var that = this;
		this._iNotificationCount++;
		// Display greeting notification and fire event
		return this.context.service.usernotification.info("Hello {0}!").then(function() {
			return that.context.event.fireNotificationDisplayed({
				notificationCount: that.getNotificationCount()
			});
		});
	},

	getNotificationCount: function() {
		return this._iNotificationCount;
	},

	onAfterNotificationDisplayed: function(oEvent) {
	}
});