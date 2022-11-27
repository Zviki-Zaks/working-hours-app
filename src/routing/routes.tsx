import { Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import LoginPage from "../components/LoginPage";

export const mainRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
  </>
);

export const publicRoutes = <Route path="/login" element={<LoginPage />} />;
