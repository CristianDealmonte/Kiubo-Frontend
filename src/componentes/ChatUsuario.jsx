import { Link } from 'react-router-dom';

import useUsuarios from '../hooks/useUsuarios';
import useSocket from '../hooks/useSocket';


const ChatUsuario = ( {usuario} ) => { 
    // Extraer variables de estado global
    const { chatActivo, setChatActivo, openChat, setOpenChat } = useUsuarios();


    // Muestra los uaurios activos en la app
    const isActive = chatActivo?._id === usuario._id;
    
    const { onLineUsers } = useSocket();
    const isOnline = onLineUsers.includes(usuario._id);
    
    return (
        <Link
            to={`/user/inbox/${usuario._id}`} 
            onClick={( )=> {
                // abre y cierra el chat
                setOpenChat(!openChat);
            }}
        >
            <li 
                className={`${ isActive ? "bg-white/20" : ''} flex items-center m-1 p-4 rounded-md hover:bg-white/10 cursor-pointer`}
                onClick={() => setChatActivo(usuario)}    
                > 
                <div
                    
                    className="flex-1 flex gap-5 items-center">
                    <div className="relative">
                        <div className={`${isOnline ? 'bg-green-600' : 'bg-red-600'} rounded-full w-3 h-3 absolute top-0 right-0 border border-color2`}></div>
                        <img className="w-10 h-10 rounded-full bg-color4" src={`${import.meta.env.VITE_BACKEND_URL}/public/${usuario.profilePicture}`}  alt="Imagen de Perfil" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-lg ">{usuario.username}</h2>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ChatUsuario;