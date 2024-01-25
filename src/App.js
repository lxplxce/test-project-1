import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./router/rout";
import "./styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              element={<route.element />}
              path={route.path}
            />
          );
        })}
        <Route path="/*" element={<Navigate to="/question/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
