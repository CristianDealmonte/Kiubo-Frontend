import React from "react";

const ContactosContenido = () => {
  const contactos = Array(4).fill({
    id: 1,
    name: "Nombre Usuario",
    avatar: "https://via.placeholder.com/40",
    status: "Ver perfil",
  });

  return (
    <div className="flex-1 bg-[#1B1A55] p-4">
      <div className="flex items-center mb-6">
        <h2 className="text-white font-bold text-lg flex-1">Busca Contactos</h2>
        <div className="flex items-center border border-[#535C91] rounded-full bg-transparent px-3 py-1">
          <input
            type="text"
            placeholder="Buscar contacto nuevo"
            className="bg-transparent text-[#9290C3] placeholder-[#9290C3] text-sm focus:outline-none flex-1"
          />
          <button className="text-[#9290C3]">
            <i className="bx bx-search text-xl"></i>
          </button>
        </div>
      </div>
      <div>
        {contactos.map((contacto, index) => (
          <div
            key={index}
            className="flex items-center bg-[#070F2B] p-4 rounded-lg mb-4"
          >
            <img
              src={contacto.avatar}
              alt={contacto.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-white font-medium">{contacto.name}</h3>
              <p className="text-[#9290C3] text-sm">{contacto.status}</p>
            </div>
            <button className="bg-[#535C91] text-white px-4 py-2 rounded-lg hover:bg-[#9290C3]">
              Enviar solicitud
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactosContenido;