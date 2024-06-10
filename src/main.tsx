import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "./views/Layout.tsx";
import { Home } from "./views/Home.tsx";
import { MapComponent } from "./views/Rutas.tsx";
import { Place } from "./views/Place.tsx";
import { Eventos } from "./views/Eventos.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rutas" element={<MapComponent />} />
            <Route path="place" element={<Place />} />
            <Route path="eventos" element={<Eventos />} />
          </Route>
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
