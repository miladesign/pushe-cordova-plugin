package co.ronash.pushe.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;

import android.content.Context;
import android.content.Intent;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import co.ronash.pushe.Pushe;
import co.ronash.pushe.PusheListenerService;

public class PusheCordovaPlugin extends CordovaPlugin {
    private static CallbackContext mCallback;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        //mCallback = callbackContext;
        if("initialize".equals(action))
            initPushe();
        else if("subscribe".equals(action))
            subscribe(args, callbackContext);
        else if ("unsubscribe".equals(action))
            unsubscribe(args, callbackContext);
        else if ("setNotificationOff".equals(action))
            setNotificationOff(callbackContext);
        else if ("setNotificationOn".equals(action))
            setNotificationOn(callbackContext);
        else if ("isPusheInitialized".equals(action))
            isPusheInitialized(callbackContext);
        else if ("getPusheId".equals(action))
            getPusheId(callbackContext);
        
        else if ("sendSimpleNotifToUser".equals(action))
            sendSimpleNotifToUser(args, callbackContext); 
        else if ("sendCustomJsonToUser".equals(action))
            sendCustomJsonToUser(args, callbackContext);
        else if ("sendAdvancedNotifToUser".equals(action))
            sendAdvancedNotifToUser(args, callbackContext);
        else if ("createNotificationChannel".equals(action))
            createNotificationChannel(args, callbackContext);
        else if ("removeNotificationChannel".equals(action))
            removeNotificationChannel(args, callbackContext);
            
        else if ("jsonCallback".equalsIgnoreCase(action))
            mCallback = callbackContext;
        return true;
    }

    private void initPushe(){
        Pushe.initialize(this.cordova.getActivity(), true);
    }
    
    private void subscribe(JSONArray args, CallbackContext callbackContext){
        try {
             String topicName = args.getString(0);
             Pushe.subscribe(this.cordova.getActivity(), topicName);
             callbackContext.success();
         } catch (JSONException e) {
             callbackContext.error("Error in Pushe.sunscribe(). Topic name not specified or is not of type String. Error: " + e.getMessage());
         }
    }

     private void unsubscribe(JSONArray args, CallbackContext callbackContext){
        try {
             String topicName = args.getString(0);
             Pushe.unsubscribe(this.cordova.getActivity(), topicName);
             callbackContext.success();
         } catch (JSONException e) {
             callbackContext.error("Error in Pushe.unsunscribe(). Topic name not specified or is not of type String. Error: " + e.getMessage());
         }
    }

    private void setNotificationOff(CallbackContext callbackContext){
        try {
            Pushe.setNotificationOff(this.cordova.getActivity());
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.setNotificationOff(). Error: " + e.getMessage());
        }
    }

    private void setNotificationOn(CallbackContext callbackContext){
       try {
            Pushe.setNotificationOff(this.cordova.getActivity());
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.setNotificationOn(). Error: " + e.getMessage());
        }
    }
    
    private void isPusheInitialized(CallbackContext callbackContext){
        try {
            boolean result = Pushe.isPusheInitialized(this.cordova.getActivity());
            callbackContext.sendPluginResult(new PluginResult(Status.OK, result));
            //callbackContext.success(String.valueOf(result));
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.isPusheInitialized(). Error: " + e.getMessage());            
        }
    }

    private void getPusheId(CallbackContext callbackContext){
        try {
            String pid = Pushe.getPusheId(this.cordova.getActivity());
            callbackContext.sendPluginResult(new PluginResult(Status.OK, pid));
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.getPusheId. Error: " + e.getMessage());
        }
    }

    
    private void sendSimpleNotifToUser(JSONArray args, CallbackContext callbackContext){
        try {
            String userPusheId = args.getString(0);
            String title = args.getString(1);
            String content = args.getString(2);
            Pushe.sendSimpleNotifToUser(this.cordova.getActivity(), userPusheId, title, content);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.sendSimpleNotifToUser(). Error: " + e.getMessage());
        }
        
    }

    private void sendAdvancedNotifToUser(JSONArray args, CallbackContext callbackContext){
        try {
            String userPusheId = args.getString(0);
            String notificationJson = args.getString(1);
            Pushe.sendAdvancedNotifToUser(this.cordova.getActivity(), userPusheId, notificationJson);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.sendAdvancedNotifToUser(). Error: " + e.getMessage());
        }
        
    }

    private void sendCustomJsonToUser(JSONArray args, CallbackContext callbackContext){
        try {
            String userPusheId = args.getString(0);
            String customJson = args.getString(1);
            Pushe.sendCustomJsonToUser(this.cordova.getActivity(), userPusheId, customJson);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in Pushe.sendCustomJsonToUser(). Error: " + e.getMessage());
        }
    }
    
    private void createNotificationChannel(JSONArray args, CallbackContext callbackContext){
        try {
            String channelId = args.getString(0);
            String channelName = args.getString(1);
            String description = args.getString(2);
            int importance = args.getInt(3);
            boolean enableLight = args.getBoolean(4);
            boolean enableVibration = args.getBoolean(5);
            boolean showBadge = args.getBoolean(6);
            int ledColor = args.getInt(7);
            
            Pushe.createNotificationChannel(this.cordova.getActivity(), channelId, channelName, description, importance, enableLight, enableVibration,
                showBadge, ledColor, null /*vibration pattern*/);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in createNotificationChannel(). Error: " + e.getMessage());
        }
    }

    private void removeNotificationChannel(JSONArray args, CallbackContext callbackContext){
        try {
            String channelId = args.getString(0);
            
            Pushe.removeNotificationChannel(this.cordova.getActivity(), channelId);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error("Error in createNotificationChannel(). Error: " + e.getMessage());
        }
    }

    
    public static class CustomContentListener extends PusheListenerService {
        public CustomContentListener() {
        }

        @Override
        public void onMessageReceived(JSONObject jsonContent,JSONObject content){
            if(jsonContent != null && !jsonContent.toString().isEmpty()) {
                android.util.Log.i("Pushe", "Custom json Message: " + jsonContent.toString());
                if(mCallback != null){
                    PluginResult result = new PluginResult(PluginResult.Status.OK, jsonContent);
                    result.setKeepCallback(true);
                    mCallback.sendPluginResult(result);
                }
            }

        }
    }
}
