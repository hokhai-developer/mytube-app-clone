import { signOut } from 'firebase/auth';
import { Auth } from '~/firebase/firebaseConfig';

export const signOutAuth = async () => {
  const result = await signOut(Auth);
  return result;
};
