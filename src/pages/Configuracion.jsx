import React from "react";
import Sidebar from "./Sidebar";

const Configuracion = () => {
  const opciones = [
    { id: 1, label: "Editar Perfil" },
    { id: 2, label: "Notificaciones" },
    { id: 3, label: "Personalizar Chats" },
    { id: 4, label: "Cuentas Bloqueadas" },
    { id: 5, label: "Cerrar Sesión" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Configuración */}
      <div className="flex flex-1">
        {/* Menú de Configuración */}
        <div className="w-1/4 bg-[#070F2B] text-white flex flex-col">
          <div className="p-4 border-b border-[#535C91]">
            <h1 className="font-bold text-lg">Configuración</h1>
          </div>
          <ul className="mt-4">
            {opciones.map((opcion) => (
              <li
                key={opcion.id}
                className="py-3 px-4 hover:bg-[#1B1A55] cursor-pointer border-b border-[#535C91]"
              >
                {opcion.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1 bg-[#1B1A55] text-white flex items-center justify-center">
          <h2 className="text-lg text-[#9290C3]">
            Selecciona una opción para ver su contenido.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
