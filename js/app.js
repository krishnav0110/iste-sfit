// <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
// importScripts("https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js")
// importScripts("https://www.gstatic.com/firebasejs/7.22.0/firebase-messaging.js")


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

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BLJ7yLwnzydc-OjVGokWc5tlmfM92I8UJSvmYNxkUAJKsBj-MtAa6S658IFv2iic9riPaNQSDs_2U0SvK8RkeVs");

messaging.requestPermission()
.then(function(){
    // console.log("Granted");
    return messaging.getToken();
})
.then( (token)=>{
    // console.log(token);
})
.catch((err)=>{
    console.log("Error occured");
    // prompt("Something went wrong");
})


messaging.onMessage((payload) => {
console.log('Message received. ', payload);
// ...
});

  // messaging.getToken().then((currentToken) => {
    //     if (currentToken) {
    //         sendTokenToServer(currentToken);
    //         updateUIForPushEnabled(currentToken);
    //     } else {
    //         // Show permission request.
    //         console.log('No Instance ID token available. Request permission to generate one.');
    //         // Show permission UI.
    //         updateUIForPushPermissionRequired();
    //         setTokenSentToServer(false);
    //     }
    // }).catch((err) => {
    //     console.log('An error occurred while retrieving token. ', err);
    //     showToken('Error retrieving Instance ID token. ', err);
    //     setTokenSentToServer(false);
    // });