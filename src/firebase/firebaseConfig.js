import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAWMecHo3nk7CR5q1IUBP_WEMs9rrQ81Og',
  authDomain: 'mytube-app-clone.firebaseapp.com',
  projectId: 'mytube-app-clone',
  storageBucket: 'mytube-app-clone.appspot.com',
  messagingSenderId: '288816429225',
  appId: '1:288816429225:web:0d50725f01798f2bb3d1b8',
  measurementId: 'G-8H9FG7MDSH',
};
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
