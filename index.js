/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {firebase} from '@react-native-firebase/messaging';
import {name as appName} from './app.json';
import {firebaseConfig} from './firebase';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    messaging().getInitialNotification(async remoteMessage => {
      console.log('Message handled in the Kill Mode', remoteMessage);
    });
AppRegistry.registerComponent(appName, () => App);
