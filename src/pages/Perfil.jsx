import React from "react";
import Sidebar from "./Sidebar";
import PerfilContent from "./PerfilContent";

const Perfil = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <PerfilContent />
    </div>
  );
};

export default Perfil;
