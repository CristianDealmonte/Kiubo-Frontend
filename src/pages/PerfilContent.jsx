import React from "react";

const PerfilContent = () => {
  return (
    <div className="flex-1 bg-[#1B1A55] p-6">
      {/* Avatar */}
        <div className="relative bg-[#070F2B] h-40 rounded-lg">
            <div className="relative bg-[#070F2B] h-40 rounded-lg">
                <div className="absolute -bottom-10 left-6 flex items-center justify-center w-20 h-20 bg-[#535C91] rounded-full border-4 border-[#1B1A55]">
                    <i className="bx bxs-user text-white text-3xl"></i>
                </div>
            </div>
      </div>

      {/* Información del Usuario */}
      <div className="mt-16 ml-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-2xl">Nombre Usuario</h1>
          <button className="bg-[#535C91] text-white px-4 py-2 rounded-lg hover:bg-[#070F2B]">
            <i className="bx bx-edit-alt"></i> Editar Perfil
          </button>
        </div>

        {/* Accesos */}
        <div className="mt-4">
          <ul className="flex space-x-4 text-white">
            <li className="cursor-pointer border-b-2 border-[#9290C3] pb-1">Información</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-[#9290C3] pb-1">Contactos</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-[#9290C3] pb-1">Grupos</li>
          </ul>
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-6 mx-6 bg-[#070F2B] p-4 rounded-lg">
        <h2 className="text-white font-bold text-lg">Descripción</h2>
        <p className="text-[#9290C3] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit lacus quam, quis posuere
          sapien accumsan at. Suspendisse potenti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Dignissimos, quidem quaerat error molestias quia quod ad laborum soluta autem. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam, dolorum a autem distinctio consectetur quasi sapiente suscipit nesciunt similique ipsam! Nobis culpa illum iste modi nam ullam placeat explicabo.
        </p>
      </div>
    </div>
  );
};

export default PerfilContent;
