import React from "react";

const SolicitudesContenido = () => {
  const solicitudes = Array(4).fill({
    id: 1,
    name: "Nombre Usuario",
    avatar: "https://via.placeholder.com/40",
    status: "Ver perfil",
  });

  return (
    <div className="flex-1 bg-[#1B1A55] p-4">
      <h2 className="text-white font-bold text-lg mb-4">Solicitudes</h2>
      {solicitudes.map((solicitud, index) => (
        <div
          key={index}
          className="flex items-center bg-[#070F2B] p-4 rounded-lg mb-4"
        >
          <img
            src={solicitud.avatar}
            alt={solicitud.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-white font-medium">{solicitud.name}</h3>
            <p className="text-[#9290C3] text-sm">{solicitud.status}</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#535C91] text-white px-4 py-2 rounded-lg hover:bg-[#9290C3]">
              Aceptar
            </button>
            <button className="bg-[#535C91] text-white px-4 py-2 rounded-lg hover:bg-[#9290C3]">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolicitudesContenido;
