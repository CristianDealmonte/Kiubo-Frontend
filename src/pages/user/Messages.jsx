// Importacion de dependencias
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


// Importacion de custom modules
import useMensajes from "../../context/MensajesProvider";
import useUsuarios from '../../hooks/useUsuarios';
import useAuth from "../../hooks/useAuth";


// Importacion de componentes
import Alerta from '../../componentes/Alerta';
import ChatInfo from "../../componentes/ChatInfo";
import ListadoMensajes from "../../componentes/ListadoMensajes";
import ChatControls from '../../componentes/ChatControls';
import ListadoChats from "../../componentes/ListadoChats";
import NoChatSelected from "../../componentes/NoChatSelected";


const Messages = () => {
    const { auth } = useAuth();
    const { id } = useParams();
    const { chatActivo, openChat, usuarios, setChatActivo } = useUsuarios();

    const [ busqueda, setBusqueda ] = useState('');
    const [ alerta, setAlerta ] = useState({});

    // instancia de redireccion
    const navigate = useNavigate();

    // habilitar scroll
    const scrollBarr = 'overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full &::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-color3';
 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!busqueda) return;

        const chat = usuarios.find((c) => c.username.toLowerCase().includes(busqueda.toLowerCase()))


        if(chat) {
            setChatActivo(chat);

            console.log(chatActivo)

            // Redirige al usuario
            navigate(`/user/inbox/${chat._id}`)

            setBusqueda('');
            setAlerta({});
        } else {
            // Crea alerta de error
            setAlerta({
                msg: 'No se encontro el usuario',
                error: true
            });
        }

    }

    const { msg } = alerta;


    return(
        <>
            <aside 
                className={`${scrollBarr} ${openChat ? 'hidden' : 'block'} min-h-full lg:block bg-color2  p-2 lg:w-3/12 lg:min-w-80 lg:border-r lg:border-color3`}>

                {/* Busqueda */}
                <div className="flex flex-col gap-4 px-2 py-5 border-b border-color3">

                    <h1 className="text-2xl text-white font-bold">Kiubo | {auth.username}</h1>

                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="flex border border-color4  rounded-full">
                            <input 
                                type="text"
                                placeholder="Busca un chat"
                                className="flex-1 bg-transparent text-white py-2 px-5 focus:outline-none"
                                value={busqueda}
                                onChange={(e) => {
                                    setBusqueda(e.target.value);
                                }}
                            />
                            <button type="submit">
                                <i className='bx bx-search-alt text-white text-xl px-3'></i>
                            </button>
                        </div>
                    </form>

                    { msg &&
                        <div className="lg:pt-10">
                            <Alerta
                                alerta={alerta}
                            ></Alerta>
                        </div>
                    }

                </div>
                
                
                {/* Lista de usuarios */}
                <ul>
                    <ListadoChats/>
                </ul>
            </aside>

            <main className={`${openChat? 'block' : 'hidden'} lg:flex flex-1 flex flex-col lg:w-9/12 overflow-auto`}>

                { chatActivo?._id  && id  ? (
                    <>
                        {/* Info de chat */}
                        <div className="flex items-center gap-3 border-b border-color3 px-5 py-3">
                            <ChatInfo/>
                        </div>

                        {/* mensajes */}
                        <div 
                            className={`${scrollBarr}
                            flex-1 flex flex-col gap-2 p-3 m-1 `}>
                            <ListadoMensajes/>
                        </div>

                        {/* Controles */}
                        <div className="bg-color2 border-t border-color3 py-3 px-4">
                            {/* Componente */}
                            <ChatControls/>
                        </div>
                    </>
                ) : (
                    <div className="h-full flex items-center">

                        <NoChatSelected/>

                    </div>
                )}

                

            </main>

        </>



    )
}

export default Messages;