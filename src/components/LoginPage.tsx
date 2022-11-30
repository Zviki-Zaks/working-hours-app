import { FormEvent, useState } from "react";
import { useRecoilCallback } from "recoil";
import { createUser, singIn, updateAuthInfo } from "../firebase/firebase.auth";
import { addUser } from "../firebase/firebase.users";
import { AuthInfo } from "../model/user-model";
import { validateEmail } from "../services/validators";
import { userInfoAtom } from "../state/atoms/auth-atom";

const LoginPage = () => {
  const [userCred, setUserCred] = useState<AuthInfo>({
    email: "",
    password: "",
    name: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSingIn = useRecoilCallback(({ set }) => async () => {
    try {
      setLoading(true);
      // TODO: display loading
      if (isSignup) {
        const { uid } = await createUser(userCred);
        await updateAuthInfo(userCred.name);
        await addUser({
          id: uid,
          email: userCred.email,
          name: userCred.name,
        });
        set(userInfoAtom, {
          id: uid,
          email: userCred.email,
          name: userCred.name,
        });
      } else {
        const { uid } = await singIn(userCred);
        set(userInfoAtom, {
          id: uid,
          email: userCred.email,
          name: userCred.name,
        });
      }
    } catch (error) {
      // TODO: handle error
      console.error(`Login fail`);
    }
  });
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="flex w-10/12 flex-col items-center gap-5 rounded border p-5 shadow-md sm:w-6/12"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
        }}
      >
        <h3>{isSignup ? "הרשם" : "היכנס"}</h3>
        {!!isSignup && (
          <input
            className="input"
            type="text"
            value={userCred.name}
            placeholder="שם"
            onChange={({ target }) =>
              setUserCred((_) => ({
                ..._,
                name: target.value,
              }))
            }
          />
        )}
        <input
          className="input"
          type="email"
          value={userCred.email}
          placeholder="כתובת אימייל"
          onChange={({ target }) =>
            setUserCred((_) => ({
              ..._,
              email: target.value,
            }))
          }
        />
        <input
          className="input"
          type="password"
          value={userCred.password}
          placeholder="סיסמה (6 תווים לפחות)"
          onChange={({ target }) =>
            setUserCred((_) => ({
              ..._,
              password: target.value,
            }))
          }
        />
        <button
          className={`btn ${
            isSignup ? `bg-green-400 text-white` : `btn-primary`
          }`}
          disabled={
            !validateEmail(userCred.email) ||
            userCred.password.length < 6 ||
            (isSignup && !userCred.name)
          }
          onClick={onSingIn}
        >
          {isSignup ? "הרשמה" : "כניסה"}
        </button>
        <button
          className="text-sm text-gray-500 underline"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "יש לך חשבון? היכנס" : "אין לך חשבון? הרשם"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
