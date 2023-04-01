import { initializeApp } from 'firebase/app';
import { get, getDatabase, onValue, ref, set, update } from 'firebase/database';

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    databaseURL: 'https://smv-daq.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// get All Trial Data
export async function getAllTrials() {
    console.log('getting data...');
    await get(ref(database)).then((snapshot) => {
        return snapshot.val();
    });
}

// get the latest trial time
export async function getLatestTrialTime() {
    console.log('getting latest trial time...');
    return await (await get(ref(database, 'Latest Trial'))).val();
}

// this function is mainly for testing only
export async function pushTrialData(trialTime, data) {
    console.log('updating trial data');
    return await set(ref(database, trialTime), data);
}

export default database;