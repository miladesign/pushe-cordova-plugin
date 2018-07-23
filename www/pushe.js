module.exports = {
    initialize: function() {
		console.log("Pushe.initialize started");
        cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){ },
            'PusheCordovaPlugin',
            'initialize',
            []
        ); 
    },
    subscribe: function(topicName) {
		console.log("Executing Pushe.subscribe ...");
        cordova.exec(
			function (result) {
				console.log("Execution succeeded", result);
			},
			function(result){ },
            'PusheCordovaPlugin',
            'subscribe',
            [topicName]
        ); 
    },
    unsubscribe: function(topicName) {
        console.log("Executing Pushe.unsubscribe ...");
        cordova.exec(
			function (result) {
				console.log("Execution succeeded", result);
			},
			function(result){ },
            'PusheCordovaPlugin',
            'unsubscribe',
            [topicName]
        ); 
    },
    setNotificationOff: function() {
        console.log("Executing Pushe.setNotificationOff ...");
        cordova.exec(
			function (result) {
				console.log("Execution succeeded", result);
			},
			null,
            'PusheCordovaPlugin',
            'setNotificationOff',
            []
        ); 
    },
    setNotificationOn: function () {
		console.log("Executing Pushe.setNotificationOn ...");
        cordova.exec(
            function (result) {
				console.log("Execution succeeded", result);
			},
            null,
            'PusheCordovaPlugin',
            'setNotificationOn',
            []
        );
    },
	getPusheId: function(pidCallback){
        console.log("Executing Pushe.getPusheId ...");
        cordova.exec(
			function(result){
				console.log("Pushe.getPusheId Execution succeeded", result);
				pidCallback(result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"getPusheId",
			[]
		);
    },
	sendSimpleNotifToUser: function(userPusheId, title, content){
        console.log("Executing Pushe.sendSimpleNotifToUser ...");
        cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"sendSimpleNotifToUser",
			[userPusheId, title, content]
		);
    },
	sendAdvancedNotifToUser: function(userPusheId, notificationJson){
        console.log("Executing Pushe.sendAdvancedNotifToUser ...");
        cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"sendAdvancedNotifToUser",
			[userPusheId, notificationJson]
		);
    },
	sendCustomJsonToUser: function(userPusheId, customJson){
        console.log("Executing Pushe.sendCustomJsonToUser ...");
        cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"sendCustomJsonToUser",
			[userPusheId, customJson]
		);
    },
	createNotificationChannel: function(channelId, channelName, description, importance, enableLight, enableVibration, showBadge, ledColor){
		console.log("Executing Pushe.createNotificationChannel ...");
		cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"createNotificationChannel",
			[channelId, channelName, description, importance, enableLight, enableVibration, showBadge, ledColor]
		);
    },
	removeNotificationChannel: function(channelId){
        console.log("Executing Pushe.removeNotificationChannel ...");
        cordova.exec(
			function(result){
				console.log("Execution succeeded", result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"removeNotificationChannel",
			[channelId]
		);
    },
	isPusheInitialized: function(){
        var self = this;
        console.log("Executing Pushe.isPusheInitialized ...");
        cordova.exec(
			function(result){
				console.log("Pushe.isPusheInitialized Execution succeeded", result);
				self.onInitialized(result);
			},
			function(result){
				/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"isPusheInitialized",
			[]
		);
    },
	jsonCallback: function(){
        var self = this;
        console.log("Setting Json Callback");
        cordova.exec(
			function(jsonMsg){
				console.log("JsonReceiver callback has been fired." + JSON.stringify(jsonMsg));
				self.onJsonReceived(jsonMsg);
			},
			function(result){
			/*alert("Error" + reply);*/
			},
			"PusheCordovaPlugin",
			"jsonCallback",
			[]
		);
    },
    onInitialized: null,
    onJsonReceived: null
};