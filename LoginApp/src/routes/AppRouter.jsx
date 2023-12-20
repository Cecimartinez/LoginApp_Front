import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Home } from "../Pages/Home";
import { Signup } from "../Pages/SignUp";
import { Login } from "../Pages/Login";

export const AppRouter = () => (
  <Routes>
    <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
    <Route path={ROUTE_PATHS.SIGNIN} element={<Signup />} />

    <Route index element={<Home />} />
    <Route path="/*" element={<Navigate to={""} />} />
  </Routes>
)