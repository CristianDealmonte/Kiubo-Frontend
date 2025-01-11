import React from "react";

const ContactosMenu = () => {
  const opciones = [
    { id: 1, label: "Agregar contacto", icon: "bx bx-search" },
    { id: 2, label: "Solicitudes de contactos", icon: "bx bx-message-square-dots" },
    { id: 3, label: "Todos mis contactos", icon: "bx bx-list-ul" },
  ];

  return (
    <div className="w-1/4 bg-[#070F2B] text-white">
      <div className="p-4 border-b border-[#535C91]">
        <h2 className="font-bold text-lg">Contactos</h2>
      </div>
      <ul className="flex-1">
        {opciones.map((opcion) => (
          <li
            key={opcion.id}
            className="flex items-center px-4 py-3 border-b border-[#535C91] hover:bg-[#1B1A55] cursor-pointer"
          >
            <i className={`${opcion.icon} text-xl text-[#9290C3] mr-4`}></i>
            <span>{opcion.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactosMenu;
