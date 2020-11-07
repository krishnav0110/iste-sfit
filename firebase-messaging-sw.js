// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyC-0j1xck0woWRxVyLuNJY94aN9_gF39yQ",
  authDomain: "notifications-c0c17.firebaseapp.com",
  databaseURL: "https://notifications-c0c17.firebaseio.com",
  projectId: "notifications-c0c17",
  storageBucket: "notifications-c0c17.appspot.com",
  messagingSenderId: "334068657874",
  appId: "1:334068657874:web:3db8cac0afc24957d4470b",
  measurementId: "G-1PSVKQ6VN9"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'New Event coming soon!';
    const notificationOptions = {
      body: 'New event coming soon',
      icon: 'img/logoISTE.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });