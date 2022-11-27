import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "../state/atoms/auth-atom";

interface RequireAuthRouteProps {
  children: JSX.Element;
}

const RequireAuthRoute: React.FC<RequireAuthRouteProps> = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useRecoilValue(authAtom);
  return auth ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: pathname }} />
  );
};

export default RequireAuthRoute;
