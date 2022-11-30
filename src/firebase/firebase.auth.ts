import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AuthInfo } from "../model/user-model";
import { auth } from "./firebase.config";

export async function createUser({ email, password }: AuthInfo) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    // TODO: handle error
    console.error(error);
    throw error;
  }
}

export async function singIn({ email, password }: AuthInfo) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    // TODO: handle error
    throw error;
  }
}

export async function updateAuthInfo(displayName: string) {
  try {
    auth.currentUser &&
      (await updateProfile(auth.currentUser, { displayName }));
  } catch (error) {
    // TODO: handle error
    throw error;
  }
}

export async function logOut() {
  await auth.signOut();
}
