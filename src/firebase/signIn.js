import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Auth } from '~/firebase/firebaseConfig';

export const signInWithGoogle = async () => {
  try {
    const providerGoogle = new GoogleAuthProvider();

    const signIn = await signInWithPopup(Auth, providerGoogle);
    if (signIn && signIn.user) {
      return signIn.user;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
