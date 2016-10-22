package co.ronash.pushe.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;

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