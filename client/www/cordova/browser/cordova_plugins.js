cordova.define('cordova/plugin_list', function (require, exports, module) {
    module.exports = [
        {
            'id': 'cordova-plugin-device.device',
            'file': 'plugins/cordova-plugin-device/www/device.js',
            'pluginId': 'cordova-plugin-device',
            'clobbers': ['device']
        },
        {
            'id': 'cordova-plugin-device.DeviceProxy',
            'file': 'plugins/cordova-plugin-device/src/browser/DeviceProxy.js',
            'pluginId': 'cordova-plugin-device',
            'runs': true
        },
        {
            'id': 'cordova-plugin-statusbar.statusbar',
            'file': 'plugins/cordova-plugin-statusbar/www/statusbar.js',
            'pluginId': 'cordova-plugin-statusbar',
            'clobbers': ['window.StatusBar']
        },
        {
            'id': 'cordova-plugin-statusbar.StatusBarProxy',
            'file': 'plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js',
            'pluginId': 'cordova-plugin-statusbar',
            'runs': true
        },
        {
            'id': 'ionic-plugin-keyboard.keyboard',
            'file': 'plugins/ionic-plugin-keyboard/www/browser/keyboard.js',
            'pluginId': 'ionic-plugin-keyboard',
            'runs': true,
            'clobbers': ['cordova.plugins.Keyboard']
        },
        {
            'id': 'cordova-plugin-powwow.powwow',
            'file': 'plugins/cordova-plugin-powwow/www/powwow.js',
            'pluginId': 'cordova-plugin-powwow',
            'clobbers': [
                'cordova.PowwowPlugin',
                'window.PowwowPlugin'
            ]
        },
        {
            'id': 'cordova-plugin-powwow.PowwowProxy',
            'file': 'plugins/cordova-plugin-powwow/src/browser/PowwowProxy.js',
            'pluginId': 'cordova-plugin-powwow',
            'runs': true
        },
        {
            'id': 'cordova-plugin-inappbrowser.inappbrowser',
            'file': 'plugins/cordova-plugin-inappbrowser/www/inappbrowser.js',
            'pluginId': 'cordova-plugin-inappbrowser',
            'clobbers': [
                'cordova.InAppBrowser.open',
                'window.open'
            ]
        },
        {
            'id': 'cordova-plugin-inappbrowser.InAppBrowserProxy',
            'file': 'plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js',
            'pluginId': 'cordova-plugin-inappbrowser',
            'runs': true
        },
        {
            'id': 'cordova-plugin-keychain-touch-id.TouchID',
            'file': 'plugins/cordova-plugin-keychain-touch-id/www/touchid.js',
            'pluginId': 'cordova-plugin-keychain-touch-id',
            'clobbers': ['window.plugins.touchid']
        }
    ];
    module.exports.metadata = {
        'cordova-plugin-whitelist': '1.3.3',
        'cordova-plugin-app-event': '1.2.1',
        'cordova-plugin-device': '2.0.2',
        'cordova-plugin-statusbar': '2.4.1',
        'ionic-plugin-keyboard': '2.2.1',
        'cordova-plugin-powwow': '1.0.0',
        'cordova-plugin-wkwebview-engine': '1.1.4',
        'cordova-plugin-wkwebviewxhrfix': '0.1.0',
        'cordova-plugin-inappbrowser': '2.0.1',
        'cordova-plugin-keychain-touch-id': '3.3.0'
    };
});