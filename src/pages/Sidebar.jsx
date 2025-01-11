import React from "react";

const Sidebar = () => {
  const opciones = [
    { id: 1, icon: "bx-chat", label: "Chats", ruta: "/chats" },
    { id: 2, icon: "bx-search", label: "Buscar", ruta: "/buscar" },
    { id: 3, icon: "bxs-user", label: "Perfil", ruta: "/perfil" },
    { id: 4, icon: "bx-cog", label: "Configuración", ruta: "/configuracion" },
  ];

  return (
    <div className="w-16 bg-[#1B1A55] flex flex-col items-center py-6 space-y-6">
      {opciones.map((opcion) => (
        <a
          key={opcion.id}
          href={opcion.ruta}
          className="text-[#9290C3] hover:text-white transition"
        >
          <i className={`bx ${opcion.icon} text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
