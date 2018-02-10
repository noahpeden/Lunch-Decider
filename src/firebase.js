import firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyDHWTUW7EU1toj4aAd6pVc2Vp1aggMXg7c',
	authDomain: 'thank-you-spot-cf939.firebaseapp.com',
	databaseURL: 'https://thank-you-spot-cf939.firebaseio.com',
	projectId: 'thank-you-spot-cf939',
	storageBucket: 'thank-you-spot-cf939.appspot.com',
	messagingSenderId: '55943055146'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
