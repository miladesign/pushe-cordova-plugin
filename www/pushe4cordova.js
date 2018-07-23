var exec = require("cordova/exec");
console.log("pushe plugin loaded.");
    var pushe = {};

    pushe.initialize = function() {
            console.log("Pushe.initialize started");
            cordova.exec(function(result){
                console.log("Execution succeeded", result);
             },
             function(result){
                 /*alert("Error" + reply);*/
             },"PusheCordovaPlugin","initialize",[]);
        
    };
    
    pushe.subscribe = function(topicName){
        console.log("Executing Pushe.subscribe ...");
        cordova.exec(function(result){
                     console.log("Execution succeeded", result);
                },
                function(result){
                     /*alert("Error" + reply);*/
                },"PusheCordovaPlugin","subscribe",[topicName]);
    }

    pushe.unsubscribe = function(topicName){
        console.log("Executing Pushe.unsubscribe ...");
        cordova.exec(function(result){
                     console.log("Execution succeeded", result);
                 },
                 function(result){
                     /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","unsubscribe",[topicName]);
    }

    pushe.setNotificationOff = function(){
        console.log("Executing Pushe.setNotificationOff ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","setNotificationOff",[]);
    }

    pushe.setNotificationOn = function(){
        console.log("Executing Pushe.setNotificationOn ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","setNotificationOn",[]);
    }

    pushe.isPusheInitialized = function(pusheInited){
        console.log("Executing Pushe.isPusheInitialized ...");
        cordova.exec(function(result){
                     console.log("Pushe.isPusheInitialized Execution succeeded", result);
                     pusheInited(result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","isPusheInitialized",[]);
    }

    pushe.getPusheId = function(pidCallback){
        console.log("Executing Pushe.getPusheId ...");
        cordova.exec(function(result){
                     console.log("Pushe.getPusheId Execution succeeded", result);
                     pidCallback(result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","getPusheId",[]);
    }


    pushe.sendSimpleNotifToUser = function(userPusheId, title, content){
        console.log("Executing Pushe.sendSimpleNotifToUser ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","sendSimpleNotifToUser",[userPusheId, title, content]);
    }

    pushe.sendAdvancedNotifToUser = function(userPusheId, notificationJson){
        console.log("Executing Pushe.sendAdvancedNotifToUser ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","sendAdvancedNotifToUser",[userPusheId, notificationJson]);
    }

    pushe.sendCustomJsonToUser = function(userPusheId, customJson){
        console.log("Executing Pushe.sendCustomJsonToUser ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","sendCustomJsonToUser",[userPusheId, customJson]);
    }

    pushe.createNotificationChannel = function(channelId, channelName,
              description, importance, enableLight,
              enableVibration, showBadge, ledColor){
              console.log("Executing Pushe.sendCustomJsonToUser ...");
              cordova.exec(function(result){
                   console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                     },"PusheCordovaPlugin","createNotificationChannel",[channelId, channelName,
                        description, importance, enableLight, enableVibration, showBadge, ledColor]);
    }

    pushe.removeNotificationChannel = function(channelId){
        console.log("Executing Pushe.sendCustomJsonToUser ...");
        cordova.exec(function(result){
                 console.log("Execution succeeded", result);
                 },
                 function(result){
                 /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","removeNotificationChannel",[channelId]);
    }

    pushe.jsonCallback = function(callbackToUser){
        console.log("Setting Json Callback");
        cordova.exec(function(jsonMsg){
                    console.log("JsonReceiver callback has been fired." + JSON.stringify(jsonMsg));
                    callbackToUser(jsonMsg);
                 },
                 function(result){
                     /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","jsonCallback",[]);
    }

module.exports = pushe;
