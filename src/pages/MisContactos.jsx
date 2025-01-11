import React from "react";
import Sidebar from "./Sidebar";
import ContactosMenu from "./ContactosMenu";
import MisContactosContent from "./MisContactosContent";

const MisContactos = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ContactosMenu />
      <MisContactosContent />
    </div>
  );
};

export default MisContactos;
