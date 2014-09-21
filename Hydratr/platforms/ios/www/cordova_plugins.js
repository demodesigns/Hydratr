cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/fr.adfab.pedometercordova/www/PedometerCordova.js",
        "id": "fr.adfab.pedometercordova.PedometerCordova",
        "clobbers": [
            "window.PedometerCordova"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "fr.adfab.pedometercordova": "1.O.O",
    "org.apache.cordova.dialogs": "0.2.11-dev",
    "org.apache.cordova.vibration": "0.3.12-dev"
}
// BOTTOM OF METADATA
});