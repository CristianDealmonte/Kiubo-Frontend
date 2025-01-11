import React from "react";

const ChatList = ({ chats }) => {
  return (
    <div className="w-1/3 bg-[#070F2B] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#535C91]">
        <h1 className="font-bold text-white text-lg">Kiubo</h1>
      </div>

      {/* Buscador */}
      <div className="px-4 py-3">
        <div className="flex items-center border border-[#535C91] rounded-full bg-[#070F2B]">
          <input
            type="text"
            placeholder="Busca o Crea un Chat"
            className="flex-1 px-4 py-2 bg-[#070F2B] text-[#9290C3] focus:outline-none rounded-full"
          />
          <button className="pr-4">
            <i className="bx bx-search text-[#9290C3] text-xl"></i>
          </button>
        </div>
      </div>

      {/* Lista de chats */}
      <div className="flex-1 overflow-y-auto px-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center py-3 border-b border-[#535C91] hover:bg-[#1B1A55] transition cursor-pointer"
          >
            <img
              src={chat.avatar || "https://via.placeholder.com/40"}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3 flex-1">
              <h2 className="font-medium text-white truncate">{chat.name}</h2>
              <p className="text-sm text-[#9290C3] truncate">{chat.message}</p>
            </div>
            <p className="text-sm text-[#9290C3] pr-4">{chat.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
