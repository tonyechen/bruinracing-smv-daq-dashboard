import { initializeApp } from 'firebase/app';
import { get, getDatabase, onValue, ref } from 'firebase/database';

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    databaseURL: 'https://smv-daq.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// get All Trial Data
export function getAllTrials() {
    console.log('getting data...');
    get(ref(database)).then((snapshot) => {
        console.log(snapshot.val());
    });
}
