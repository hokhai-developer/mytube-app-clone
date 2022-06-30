import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
  authDomain: 'test-ui-354613.firebaseapp.com',
  projectId: 'test-ui-354613',
  storageBucket: 'test-ui-354613.appspot.com',
  messagingSenderId: '387248122994',
  appId: '1:387248122994:web:fbf2c0829eca00531826eb',
  measurementId: 'G-GKNLKN3NS9',
};
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
