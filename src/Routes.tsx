import React from "react";
import * as Redux from "react-redux";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { authState } from "./types/auth/authType";
import Retirada from "./pages/retirar-produto";
import Stock from "./pages/stock/Stock";
import Configs from "./pages/configs/Configs";

const AppRoutes: React.FC = (): JSX.Element => {
  const { auth } = Redux.useSelector(
    (state: { authStore: authState }) => state.authStore
  );

  return (
    <>
      {auth ? <SidebarComponent /> : null}

      <Routes>
        <Route
          path="/"
          element={auth ? <Navigate to={"retirada"} /> : <Auth />}
        />
        <Route
          path="/retirada"
          element={!auth ? <Navigate to={"/"} /> : <Retirada />}
        />
        <Route
          path="/estoque"
          element={!auth ? <Navigate to={"/"} /> : <Stock />}
        />

        <Route
          path="/configuracoes"
          element={!auth ? <Navigate to={"/"} /> : <Configs />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
