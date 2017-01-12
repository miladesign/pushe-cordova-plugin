===================================================
Pushe Cordova Plugin for Android Users v. 1.1.0
===================================================

This is a plugin for Pushe android library for Cordova and other Cordova-base users (like Ionic and PhoneGap) which enables them to integrate Pushe into their applications.

How to use this plugin:
-----------------------
- First, download this plugin on your system. You should have a folder containing two files and three sub-folders.

- Create your app using Ionic/Cordova CLI tool and add android platform to it. Then run below command (you may need to append sudo before it):

``ionic plugin add <path-to-this-plugin-on-your-computer>``

OR, if you are using cordova:

``cordova plugin add <path-to-this-plugin-on-your-computer>``

For example, if you download it to *D:/development/pushe-cordova* and *pushe-cordova* contains the plugin files, add plugin command become:

``ionic plugin add D:/development/pushe-cordova-plugin``

- Login to your panel on pushe.co and create a new application with the package name of your ionic app.
- Edit *plugin.xml* file in *pushe-cordova-plugin* folder and replace "PUSHE_TOKEN" with the token of your app. Also replace "PUSHE_CR" with crash report token which is given to you. These tokens are shown in your panel for this app.

- Add below lines to your app's *index.html* file. Please note that this is an example and you should call subscribe() and unsbscribe() after initialization has finished.


.. code:: javascript

    <script type="text/javascript">
        document.addEventListener("deviceready", deviceReady, true);
        function deviceReady() {
            window.pushe.initialize(); //This call is mandatory if you want to use Pushe
            window.pushe.subscribe("my-topic"); //call this method to subscribe to a topic (optional). It has to be after Pushe become initialized.
            window.pushe.unsubscribe("my-topic"); //call this method to unsubscribe from a topic (optional).  It has to be after Pushe become initialized.
        }
    </script>

- Then build and run your app. You should see Pushe initialization logs in android log-cat (if your device is connected to your computer with usb cable) and one new installation will appear in your panel on pushe.co in a few seconds. You can now send push notifications to your app.