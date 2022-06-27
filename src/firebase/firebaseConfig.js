import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBAyDxfET8xKWPNP56UGuzMXvPNVbvqea0',
  authDomain: 'mytube-clone-ui.firebaseapp.com',
  projectId: 'mytube-clone-ui',
  storageBucket: 'mytube-clone-ui.appspot.com',
  messagingSenderId: '693732605924',
  appId: '1:693732605924:web:ade66b8f6281c3f40391f1',
  measurementId: 'G-CJS6BB0XL8',
};
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
