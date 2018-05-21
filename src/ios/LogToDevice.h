#import <Cordova/CDVPlugin.h>

@interface LogToDevice : CDVPlugin

- (void) log:(CDVInvokedUrlCommand *)command;

@end
