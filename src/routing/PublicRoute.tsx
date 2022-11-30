import { FC } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../state/atoms/auth-atom";

export interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const { state } = useLocation();
  const userInfo = useRecoilValue(userInfoAtom);

  if (userInfo) {
    return <Navigate to={(state as { from: string })?.from || "/"} replace />;
  }
  return children;
};

export default PublicRoute;
