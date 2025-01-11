import React from "react";
import Sidebar from "./Sidebar";
import ContactosMenu from "./ContactosMenu";
import ContactosContenido from "./ContactosContenido";

const Contactos = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex flex-1">
        {/* Menú de Contactos */}
        <ContactosMenu />

        {/* Contenido de Contactos */}
        <ContactosContenido />
      </div>
    </div>
  );
};

export default Contactos;
