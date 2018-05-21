package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.util.Log;

public class LogToDevice extends CordovaPlugin {

@Override
public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("log")) {
        String message = args.getString(0);
        this.log(message, callbackContext);
        return true;
    }
    return false;
}

private void log(String message, CallbackContext callbackContext) {
    if (message != null && message.length() > 0) {
        Log.d (message);
        callbackContext.success(true);
    } else {
        callbackContext.error("Expected one non-empty string argument.");
    }
}
}
