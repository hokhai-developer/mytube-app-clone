import { async } from '@firebase/util';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Auth } from '~/firebase/firebaseConfig';

export const signInWithGoogle = async () => {
  const providerGoogle = new GoogleAuthProvider();
  try {
    const signIn = await signInWithPopup(Auth, providerGoogle);
    if (signIn && signIn.user) {
      return signIn.user;
    }
  } catch (error) {
    alert(error);
    return;
  }
};
