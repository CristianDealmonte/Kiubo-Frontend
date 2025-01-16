import useAuth from "../hooks/useAuth";
import useUsuarios from '../hooks/useUsuarios';
import { extraerHora } from '../utils/extraerHora'


const Mensaje = ( {mensaje} ) => {

    // Instanciacion de la autenticacion
    const { auth } = useAuth();
    const { chatActivo } = useUsuarios();

    const formatoHora = extraerHora(mensaje.createdAt);


    return (
        <div className={`${ auth._id === mensaje.emisor ? 'justify-end' : 'justify-start'} flex  gap-3`}>

            <img className={`${ auth._id === mensaje.emisor ? 'hidden' : 'block'} w-6 h-6 rounded-full bg-color4`} src={`${import.meta.env.VITE_BACKEND_URL}/public/${chatActivo.profilePicture}`} alt="" />

            <div className="bg-color4 py-2 px-4 rounded-md text-white max-w-64 md:max-w-md lg:max-w-2xl">
                <p className=" ">{mensaje.mensaje}<span className="text-color2 text-xs ml-7">{formatoHora}</span></p>
                
            </div>
            
        </div> 
    )
}

export default Mensaje;