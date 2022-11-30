import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth } from "../firebase/firebase.config";
import { userInfoAtom } from "../state/atoms/auth-atom";

interface RequireAuthRouteProps {
  children: JSX.Element;
}

const RequireAuthRoute: React.FC<RequireAuthRouteProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setUserInfo(null);
      }
    });
  }, []);

  return userInfo ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: pathname }} />
  );
};

export default RequireAuthRoute;
