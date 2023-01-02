import { atom, selector } from "recoil";
import { auth } from "../../firebase/firebase.config";
import type { UserInfo } from "../../model/user-model";
import { getUserInfo } from "../../services/user.service";

export const userInfoAtom = atom<UserInfo | null>({
  key: "userInfoAtom",
  default: selector({
    key: "userInfoAtom/default",
    get: async () => {
      try {
        const idToken = await auth.currentUser?.getIdToken();
        if (idToken) {
          const userInfo = await getUserInfo();
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
