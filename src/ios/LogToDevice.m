#import "LogToDevice.h"
#import <Cordova/CDVPlugin.h>

@implementation LogToDevice

- (void)log:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* log = [command.arguments objectAtIndex:0];

    if (log != nil && [log length] > 0) {
        NSLog (@"console.log: %@", log);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:true];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsBool:false];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
