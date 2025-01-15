// Importacion de dependencias
import { useState } from "react";
import { useParams } from "react-router-dom";


// importacion de custom modules
import useMensajes from "../hooks/useMensajes";


const ChatControls = () => {

    // estado del formulario de envio de mensajes
    const [mensaje, setMensaje] = useState('');

    // extracion del metodo para guardar mensajes del estado global
    const { guardarMensaje } = useMensajes();

    // Extraer el id del destinatario de la URL
    const params = useParams();
    const { id } = params;

    // AL enviar el fomrulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validoacion del fomrulario
        if([mensaje].includes('')) {
            return;
        }

        // Accionar el metodo que comunica al backend
        guardarMensaje({mensaje}, id);

        setMensaje('');
    }
    
    return (
        <form 
            className="flex items-center gap-3"
            onSubmit={handleSubmit}
        >
            
            <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-color1 border border-color3 rounded-full py-2 px-4 text-white focus:outline-none"
                value={mensaje}
                onChange={e => {
                    setMensaje(e.target.value);
                }}
            />

            <button className="rounded-full">
                <i className='bx bx-send text-white text-3xl' ></i>
            </button>
        </form>
    )
}

export default ChatControls;