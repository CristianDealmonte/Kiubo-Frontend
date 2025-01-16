// Importacion de dependencias
import { createContext, useState, useEffect, Children } from "react";
import { useParams } from 'react-router-dom';

// Importacion de custom modules
import clienteAxios from "../config/axios";

const MensajesContext = createContext();


export const MensajesProvider = ({children}) => {

    // Asigna un estado global para los mensajes
    const [mensajes, setMensajes] = useState([]);
    const [cargando, setCargando] = useState(true);


    const obtenerMensajes = async (receptor) => {
        // Extrae JWT 
        const token = localStorage.getItem('authToken');
        if(!token) return;

        // Crea config para la autenticacion en back
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        
        try {
            // Realiza peticion a back
            const { data } = await clienteAxios.get(`/message/${receptor}`,config);

            // Asigna la respuesta al estado global
            setMensajes(data);

            setCargando(false);
            
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }


    // enviar mensajes
    const guardarMensaje = async (mensaje, receptor) => {

        // Envia el JWT en los encabezados de la req para la autenticacion en el bakend
        const token = localStorage.getItem('authToken');
        if(!token) return;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            // Peticion al servidor
            const { data } = await clienteAxios.post(`/message/send/${receptor}`, mensaje, config);

            // Elimina datos inecesarios de la respuesta del servidor
            const { __v, ...mensajeAlmacenado } = data;

            // Añade al estado global el nuevo mensaje
            setMensajes([...mensajes, mensajeAlmacenado]);

        } catch (error) {
            console.log(error.response.data.msg);
        }
    }

    return(
        <MensajesContext.Provider
            value={{
                mensajes,
                setMensajes,
                obtenerMensajes,
                guardarMensaje,
            }}
        >
            {children}
        </MensajesContext.Provider>
    )
}

export default MensajesContext;