import React from "react";

const VentanaChat = ({ messages }) => {
  return (
    <div className="w-2/3 flex flex-col bg-[#070F2B]">
      {/* Header */}
      <div className="px-4 py-3 bg-[#1B1A55] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Alexa"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-white font-bold">Alexa</h2>
            <p className="text-sm text-[#9290C3]">En línea</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-white text-[#9290C3] transition">
            <i className="bx bx-phone text-xl"></i>
          </button>
          <button className="hover:text-white text-[#9290C3] transition">
            <i className="bx bx-video text-xl"></i>
          </button>
          <button className="hover:text-white text-[#9290C3] transition">
            <i className="bx bx-dots-horizontal-rounded text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto bg-[#070F2B] p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xs p-3 rounded-lg ${
              message.sender === "me"
                ? "ml-auto bg-[#9290C3] text-white"
                : "mr-auto bg-[#1B1A55] text-white"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Herramientas */}
      <div className="px-4 py-3 bg-[#1B1A55] flex items-center space-x-3">
        <button className="hover:text-white text-[#9290C3] transition">
          <i className="bx bx-smile text-2xl"></i>
        </button>
        <button className="hover:text-white text-[#9290C3] transition">
          <i className="bx bx-image text-2xl"></i>
        </button>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-1 px-4 py-2 bg-[#070F2B] border border-[#535C91] rounded-full text-[#9290C3]"
        />
        <button className="ml-3 p-2 bg-[#535C91] rounded-full">
          <i className="bx bx-send text-white text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default VentanaChat;
