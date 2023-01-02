import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import type { AuthInfo, UserInfo } from "../model/user-model";
import { addUser, getUserInfo } from "../services/user.service";
import { auth } from "./firebase.config";

export async function signUp({
  email,
  password,
  name,
}: AuthInfo): Promise<UserInfo> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateAuthInfo(name);
    // await addUser({ email, name });
    return await addUser({ email, name });
  } catch (error) {
    // TODO: handle error
    console.error(error);
    throw error;
  }
}

export async function logIn({ email, password }: AuthInfo): Promise<UserInfo> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return await getUserInfo();
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
