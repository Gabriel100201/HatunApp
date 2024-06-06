import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "./views/Layout.tsx";
import { Home } from "./views/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rutas" element={<h1>Rutas</h1>} />
            <Route path="perfil" element={<h1>Perfil</h1>} />
          </Route>
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
