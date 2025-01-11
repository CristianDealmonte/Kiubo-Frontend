import React from "react";
import Sidebar from "./Sidebar";
import ContactosMenu from "./ContactosMenu";
import SolicitudesContenido from "./SolicitudesContenido";

const Solicitudes = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ContactosMenu />
      <SolicitudesContenido />
    </div>
  );
};

export default Solicitudes;
