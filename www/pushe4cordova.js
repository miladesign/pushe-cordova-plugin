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



    pushe.jsonCallback = function(callbackToUser){
        console.log("Setting Json Callback");
        cordova.exec(function(jsonMsg){
                    console.log("JsonReceiver callback has been fired." + JSON.stringify(jsonMsg));
                     callbackToUser(jsonMsg)
                 },
                 function(result){
                     /*alert("Error" + reply);*/
                 },"PusheCordovaPlugin","jsonCallback",[]);
    }

module.exports = pushe;