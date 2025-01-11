import React from "react";
import Sidebar from "./Sidebar";
import ChatList from "./ChatList";
import VentanaChat from "./VentanaChat";

const StaticChatList = () => {
  const chats = [
    { id: 1, name: "Alexa", message: "Perfecto, gracias 😊", time: "9:45 PM", avatar: "" },
    { id: 2, name: "Andrea", message: "Nos vemos mañana, ¿verdad?", time: "9:15 PM", avatar: "" },
    { id: 3, name: "Pedro", message: "¿Viste el partido de hoy?", time: "8:30 PM", avatar: "" },
    { id: 4, name: "Susana", message: "Ya te envié los documentos", time: "7:15 PM", avatar: "" },
    { id: 5, name: "Cristian", message: "¿Qué tal?", time: "7:05 PM", avatar: "" },
    { id: 6, name: "Carlos", message: "Un Fort", time: "6:50 PM", avatar: "" },
    { id: 7, name: "Luis", message: "¿Vas a venir?", time: "11:50 AM", avatar: "" },
    { id: 8, name: "Jose", message: "Gracias, en un momento lo reviso", time: "11:22 AM", avatar: "" },
    { id: 9, name: "Maria", message: "Saludos", time: "10:55 AM", avatar: "" },
    { id: 10, name: "Liliana", message: "Bien, gracias", time: "10:53 AM", avatar: "" },
  ];

  const messages = [
    { id: 1, sender: "Alexa", text: "¡Hola! ¿Cómo estás?", time: "9:00 PM" },
    { id: 2, sender: "me", text: "Todo bien, ¿y tú?", time: "9:05 PM" },
    { id: 3, sender: "Alexa", text: "Perfecto, gracias 😊", time: "9:15 PM" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Lista de chats */}
      <ChatList chats={chats} />

      {/* Ventana de chat */}
      <VentanaChat messages={messages} />
    </div>
  );
};

export default StaticChatList;
