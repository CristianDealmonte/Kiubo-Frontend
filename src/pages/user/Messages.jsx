// Importacion de dependencias
import { useState } from "react";


// Importacion de custom modules
import useAuth from "../../hooks/useAuth";
import Mensaje from '../../componentes/Mensaje';
import ChatContacto from '../../componentes/ChatContacto'


const Messages = () => {

    const [openChat, setOpenChat] = useState(true);
    
    const { auth } = useAuth;

    const cerrarChat = () => {
        console.log('cerrando chat');
        setOpenChat(false);
    }
    const abrirChat = () => {
        console.log('abriendo chat');
        setOpenChat(true);
    }

    // habilitar scroll
    const scrollBarr = 'overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full &::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-color3';

    
    const mensaje = {
        img: '1234',
        contenido: 'hola como estas',
        emisor: '6783f3a46769e583ebdfd114'
    }
    const mensaje2 = {
        img: '1234',
        contenido: 'hola como estashola como estashola como estashola como estashola como estashola como estashola como estas',
        emisor: '67834cfa969149549ab93f42'
    }
    const mensaje3 = {
        img: '1234',
        contenido: 'hola como estas',
        emisor: '6783f3a46769e583ebdfd114'
    }
    const mensaje4 = {
        img: '1234',
        contenido: 'hola como estashola como estashola como estashola como estashola como estashola como estashola como estas',
        emisor: '6783f3a46769e583ebdfd114'
    }


    return(
        <>
                <aside 
                    className={`${scrollBarr} ${openChat ? 'hidden' : 'block'} lg:block bg-color2  p-2 lg:w-3/12 lg:min-w-80 lg:border-r lg:border-color3`}>

                    {/* Busqueda */}
                    <div className="flex flex-col gap-4 px-2 py-5 border-b border-color3">

                        <h1
                        className="text-2xl text-white font-bold">Kiubo</h1>

                        <form >
                            <div className="flex border border-color4  rounded-full">
                                <input 
                                    type="text"
                                    placeholder="Busca un chat"
                                    className="flex-1 bg-transparent text-white py-2 px-5 focus:outline-none"
                                />
                                <button type="submit">
                                    <i className='bx bx-search-alt text-white text-xl px-3'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    
                    {/* Lista de contactos */}
                    <ul>
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        <li onClick={abrirChat}>
                            <ChatContacto></ChatContacto>
                        </li>
                                    
                        

                    </ul>

                    
                </aside>

            <main className="flex-1 flex flex-col lg:w-9/12 overflow-auto">

                {/* Info de chat */}
                <div className="flex items-center gap-3 border-b border-color3 px-5 py-3">

                    <button onClick={cerrarChat} className="lg:hidden">
                        <i className="bx bx-arrow-back text-2xl text-white"></i>
                    </button>

                    <div className="flex-1 flex gap-5">
                        <img className="w-12 h-12 rounded-full bg-color4" src="" alt="" />
                        <div>
                            <h2 className="text-white text-xl ">Nombre Usuario</h2>
                            <p className="text-white text-sm">Conectado</p>
                        </div>
                    </div>

                    <div >
                        <i className="bx bx-cog text-2xl text-white"></i>
                    </div>
                </div>

                {/* mensajes */}
                <div 
                    className={`${scrollBarr}
                    flex-1 flex flex-col gap-2 p-3 m-1 `}>

                    <Mensaje
                        mensaje={mensaje}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje2}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje3}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje4}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje2}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje3}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje4}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje2}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje3}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje4}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje2}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje3}
                    ></Mensaje>
                    <Mensaje
                        mensaje={mensaje4}
                    ></Mensaje>

                </div>

                {/* Controles */}
                <div className="bg-color2 border-t border-color3 py-3 px-4">
                    <form className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 bg-color1 border border-color3 rounded-full py-2 px-4 text-white focus:outline-none"
                        />

                        <button className="rounded-full">
                            <i className='bx bx-send text-white text-3xl' ></i>
                        </button>
                    </form>
                </div>
            </main>


        </>



    )
}

export default Messages;