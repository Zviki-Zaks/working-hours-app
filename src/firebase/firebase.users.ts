import { User } from "firebase/auth";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { UserInfo } from "../model/user-model";
import { db } from "./firebase.config";

const COLLECTION = "users";
const usersCollectionRef = collection(db, COLLECTION);

export async function getUser(userId: string) {
  try {
    const userSnap = await getDoc(doc(usersCollectionRef, userId));
    if (userSnap.exists()) {
      console.log("Document :", userSnap);
      return userSnap.data() as UserInfo;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    throw error;
  }
}

export async function addUser({ id, email, name }: UserInfo) {
  try {
    await setDoc(doc(db, COLLECTION, id), {
      email,
      name,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
