// Importaciones de dependencias 
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


// Importaciones de estado global
import useMensajes from "../hooks/useMensajes";
import useUsuarios from '../hooks/useUsuarios';
import useListenMessages from "../hooks/useListenMessages";


// Importaciones de componentes
import Mensaje from "./Mensaje";

const ListadoMensajes = () => {
    // extraccion de funciones de estado global
    const { mensajes, obtenerMensajes } = useMensajes();
    const { chatActivo, cargando } = useUsuarios();

    useListenMessages();

    // extraccion del id del usuario receptor del chat de la URL
    const params = useParams();
    const { id } = params;

    // Extraccion de los mensajes del usuario
    useEffect( ()=> {
       obtenerMensajes(id); 
    }, [id]);
    

    if(cargando) return 'cargando...'

    const scrollRef = useRef(null);

    useEffect(() => {
        // Mover el scroll al final cada vez que cambien los mensajes
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [mensajes]);

    return (
        <>
            {/* muestra el contenido condicionalmente si existen o no mensajes con este usuario */}
            { mensajes.length ? (
                <>
                    {mensajes.map( mensaje => (
                        <Mensaje
                            key={mensaje._id}
                            mensaje={mensaje}
                        />
                    ))}
                    <div ref={scrollRef} /> {/* Elemento vacío para scroll */}
                </>
            ) : (
                <>
                    <h2 
                    className="text-4xl text-white font-black text-center">No hay mensajes</h2>

                    <p className="text-xl text-white text-center font-bold">Comienza a chatear con {chatActivo.username} y <span className="text-color4">conecta con mas personas</span> </p>
                </>
            ) }
        </>
    )
};

export default ListadoMensajes;