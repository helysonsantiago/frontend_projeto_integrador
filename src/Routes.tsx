import React from "react";
import * as Redux from "react-redux";
import SidebarComponent from './components/sidebar/SidebarComponent';
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { authState } from "./types/auth/authType";



const AppRoutes: React.FC = () : JSX.Element => {
  const { auth } = Redux.useSelector(
    (state: { authStore: authState }) => state.authStore
  );

  return (
    <>
      {auth ? <SidebarComponent/> : null}

      <Routes>
        <Route path="/" element={auth ? <Navigate to={"home"} /> : <Auth />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
