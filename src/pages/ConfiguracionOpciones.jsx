import React from "react";

const ConfiguracionOpciones = () => {
  const opciones = [
    { id: 1, icon: <i className="bx bxs-user" style={{ color: "#9290C3" }}></i>, label: "Cuenta" },
    { id: 2, icon: <i className="bx bxs-chat" style={{ color: "#9290C3" }}></i>, label: "Chats" },
    { id: 3, icon: <i className="bx bxs-bell" style={{ color: "#9290C3" }}></i>, label: "Notificaciones" },
    { id: 4, icon: <i className="bx bxs-data" style={{ color: "#9290C3" }}></i>, label: "Almacenamiento y datos" },
    { id: 5, icon: <i className="bx bxs-lock-alt" style={{ color: "#9290C3" }}></i>, label: "Privacidad y seguridad" },
    { id: 6, icon: <i className="bx bxs-help-circle" style={{ color: "#9290C3" }}></i>, label: "Ayuda" },
  ];

  return (
    <div className="flex-1 bg-[#070F2B]">
      {opciones.map((opcion) => (
        <div
          key={opcion.id}
          className="flex items-center px-5 py-4 border-b border-[#535C91] hover:bg-[#1B1A55] cursor-pointer"
        >
          <span className="text-xl">{opcion.icon}</span>
          <p className="ml-4 font-medium text-[#9290C3]">{opcion.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ConfiguracionOpciones;
