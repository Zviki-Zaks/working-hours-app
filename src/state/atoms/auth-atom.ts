import { atom, selector } from "recoil";
import { auth } from "../../firebase/firebase.config";
import { getUser } from "../../firebase/firebase.users";
import { UserInfo } from "../../model/user-model";

export const userInfoAtom = atom<UserInfo | null>({
  key: "userInfoAtom",
  default: selector({
    key: "userInfoAtom/default",
    get: async () => {
      try {
        const isTokenExist = await auth.currentUser?.getIdToken();
        if (isTokenExist && auth.currentUser) {
          const userInfo = await getUser(auth.currentUser.uid);
          if (!userInfo) {
            auth.signOut();
          }
          return userInfo;
        } else {
          return null;
        }
      } catch (error) {
        console.error(`error while trying to fetch user info`, error);
        return null;
      }
    },
  }),
});
