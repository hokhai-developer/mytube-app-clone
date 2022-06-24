import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Auth } from '~/firebase/firebaseConfig';

export const signInWithGoogle = async () => {
  try {
    const providerGoogle = new GoogleAuthProvider();
    providerGoogle.addScope(
      'https://www.googleapis.com/auth/youtube.force-ssl',
    );
    const signIn = await signInWithPopup(Auth, providerGoogle);
    if (signIn && signIn.user) {
      return signIn.user;
    }
  } catch (error) {
    alert(error);
    return;
  }
};
